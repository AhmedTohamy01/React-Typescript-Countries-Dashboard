import { useContext } from 'react'
import { MainContext } from '../context/MainContext'
import { makeStyles } from '@material-ui/core/styles'
import GetData from '../custom-hooks/GetData'
import DisplaySectionWrapper from '../components/Display/DisplaySectionWrapper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

interface ItemType {
  name: string
  languages: [{ name?: string }]
  region: string
  population: number
  capital: string
  timezones: string[]
}

export default function DisplayCompound() {
  const useStyles = makeStyles({
    header: {
      fontWeight: 'bold',
      width: 'max-content',
      minWidth: 150,
    },
  })
  const classes = useStyles()

  const { data } = GetData()
  console.log('data', data)
  const {
    searchTerm,
    checkBoxFilterTerm,
    regionFilterTerm,
    populationFrom,
    populationTo,
  } = useContext(MainContext)

  return (
    <>
      <DisplaySectionWrapper>
        <TableContainer component={Paper} elevation={10}>
          <Table size='small' aria-label='Countries Table'>
            <TableHead>
              <TableRow>
                <TableCell className={classes.header}>Country Name</TableCell>
                <TableCell className={classes.header}>Capital</TableCell>
                <TableCell className={classes.header}>Region</TableCell>
                <TableCell className={classes.header}>Population</TableCell>
                <TableCell className={classes.header}>Languages</TableCell>
                <TableCell className={classes.header}>Time Zones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searchTerm !== '' && // case-1
              checkBoxFilterTerm === 'languages' &&
              regionFilterTerm !== 'all' &&
              populationFrom &&
              populationTo
                ? data
                    .filter(
                      (item: ItemType) =>
                        item?.languages
                          .map((lang) => lang.name)
                          .toString()
                          .toLowerCase()
                          .includes(searchTerm!.toLowerCase()) &&
                        item.region?.toLowerCase() ===
                          regionFilterTerm?.toLowerCase() &&
                        item.population! <= populationTo &&
                        item.population! >= populationFrom
                    )
                    .map((item: ItemType, index: number) => (
                      <TableRow key={index}>
                        <TableCell>{item.name!}</TableCell>
                        <TableCell>{item.capital}</TableCell>
                        <TableCell>{item.region}</TableCell>
                        <TableCell>{item.population}</TableCell>
                        <TableCell>
                          {item?.languages?.map((lang) => `${lang.name}, `)}
                        </TableCell>
                        <TableCell>
                          {item?.timezones?.toString().split(',').join(' ')}
                        </TableCell>
                      </TableRow>
                    ))
                : searchTerm !== '' && // case-2
                  (checkBoxFilterTerm === 'name' ||
                    checkBoxFilterTerm === 'capital') &&
                  regionFilterTerm !== 'all' &&
                  populationFrom &&
                  populationTo
                ? data
                    .filter(
                      (item: ItemType) =>
                        item[checkBoxFilterTerm]
                          ?.toLowerCase()
                          .includes(searchTerm!.toLowerCase()) &&
                        item.region!.toLowerCase() ===
                          regionFilterTerm!.toLowerCase() &&
                        item.population! <= populationTo &&
                        item.population! >= populationFrom
                    )
                    .map((item: ItemType, index: number) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.capital}</TableCell>
                        <TableCell>{item.region}</TableCell>
                        <TableCell>{item.population}</TableCell>
                        <TableCell>
                          {item?.languages?.map((lang) => `${lang.name}, `)}
                        </TableCell>
                        <TableCell>
                          {item?.timezones?.toString().split(',').join(' ')}
                        </TableCell>
                      </TableRow>
                    ))
                : searchTerm !== '' && // case-3
                  checkBoxFilterTerm === 'languages' &&
                  regionFilterTerm !== 'all'
                ? data
                    .filter(
                      (item: ItemType) =>
                        item.languages
                          ?.map((lang) => lang.name)
                          .toString()
                          .toLowerCase()
                          .includes(searchTerm!.toLowerCase()) &&
                        item.region!.toLowerCase() ===
                          regionFilterTerm!.toLowerCase()
                    )
                    .map((item: ItemType, index: number) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.capital}</TableCell>
                        <TableCell>{item.region}</TableCell>
                        <TableCell>{item.population}</TableCell>
                        <TableCell>
                          {item?.languages?.map((lang) => `${lang.name}, `)}
                        </TableCell>
                        <TableCell>
                          {item?.timezones?.toString().split(',').join(' ')}
                        </TableCell>
                      </TableRow>
                    ))
                : searchTerm !== '' && // case-4
                  (checkBoxFilterTerm === 'name' ||
                    checkBoxFilterTerm === 'capital') &&
                  regionFilterTerm !== 'all'
                ? data
                    .filter(
                      (item: ItemType) =>
                        item[checkBoxFilterTerm]
                          ?.toLowerCase()
                          .includes(searchTerm!.toLowerCase()) &&
                        item.region!.toLowerCase() ===
                          regionFilterTerm!.toLowerCase()
                    )
                    .map((item: ItemType, index: number) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.capital}</TableCell>
                        <TableCell>{item.region}</TableCell>
                        <TableCell>{item.population}</TableCell>
                        <TableCell>
                          {item?.languages?.map((lang) => `${lang.name}, `)}
                        </TableCell>
                        <TableCell>
                          {item?.timezones?.toString().split(',').join(' ')}
                        </TableCell>
                      </TableRow>
                    ))
                : searchTerm !== '' &&
                  checkBoxFilterTerm === 'languages' &&
                  populationFrom &&
                  populationTo
                ? data
                    .filter(
                      (item: ItemType) =>
                        item?.languages
                          ?.map((lang) => lang.name)
                          .toString()
                          .toLowerCase()
                          .includes(searchTerm!.toLowerCase()) &&
                        item.population! <= populationTo &&
                        item.population! >= populationFrom
                    )
                    .map((item: ItemType, index: number) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.capital}</TableCell>
                        <TableCell>{item.region}</TableCell>
                        <TableCell>{item.population}</TableCell>
                        <TableCell>
                          {item?.languages?.map((lang) => `${lang.name}, `)}
                        </TableCell>
                        <TableCell>
                          {item?.timezones?.toString().split(',').join(' ')}
                        </TableCell>
                      </TableRow>
                    ))
                : searchTerm !== '' && // case-6
                  (checkBoxFilterTerm === 'name' ||
                    checkBoxFilterTerm === 'capital') &&
                  populationFrom &&
                  populationTo
                ? data
                    .filter(
                      (item: ItemType) =>
                        item[checkBoxFilterTerm]
                          ?.toLowerCase()
                          .includes(searchTerm!.toLowerCase()) &&
                        item.population! <= populationTo &&
                        item.population! >= populationFrom
                    )
                    .map((item: ItemType, index: number) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.capital}</TableCell>
                        <TableCell>{item.region}</TableCell>
                        <TableCell>{item.population}</TableCell>
                        <TableCell>
                          {item?.languages?.map((lang) => `${lang.name}, `)}
                        </TableCell>
                        <TableCell>
                          {item?.timezones?.toString().split(',').join(' ')}
                        </TableCell>
                      </TableRow>
                    ))
                : regionFilterTerm !== 'all' && populationFrom && populationTo // case-7
                ? data
                    .filter(
                      (item: ItemType) =>
                        item?.region?.toLowerCase() ===
                          regionFilterTerm!.toLowerCase() &&
                        item.population! <= populationTo &&
                        item.population! >= populationFrom
                    )
                    .map((item: ItemType, index: number) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.capital}</TableCell>
                        <TableCell>{item.region}</TableCell>
                        <TableCell>{item.population}</TableCell>
                        <TableCell>
                          {item?.languages?.map((lang) => `${lang.name}, `)}
                        </TableCell>
                        <TableCell>
                          {item?.timezones?.toString().split(',').join(' ')}
                        </TableCell>
                      </TableRow>
                    ))
                : searchTerm !== '' && checkBoxFilterTerm === 'languages' // case-8
                ? data
                    .filter((item: ItemType) =>
                      item
                        ?.languages!.map((lang) => lang.name)
                        .toString()
                        .toLowerCase()
                        .includes(searchTerm!.toLowerCase())
                    )
                    .map((item: ItemType, index: number) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.capital}</TableCell>
                        <TableCell>{item.region}</TableCell>
                        <TableCell>{item.population}</TableCell>
                        <TableCell>
                          {item?.languages?.map((lang) => `${lang.name}, `)}
                        </TableCell>
                        <TableCell>
                          {item?.timezones?.toString().split(',').join(' ')}
                        </TableCell>
                      </TableRow>
                    ))
                : searchTerm !== '' && // case-9
                  (checkBoxFilterTerm === 'name' ||
                    checkBoxFilterTerm === 'capital')
                ? data
                    .filter((item: ItemType) =>
                      item[checkBoxFilterTerm]
                        ?.toLowerCase()
                        .includes(searchTerm!.toLowerCase())
                    )
                    .map((item: ItemType, index: number) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.capital}</TableCell>
                        <TableCell>{item.region}</TableCell>
                        <TableCell>{item.population}</TableCell>
                        <TableCell>
                          {item?.languages?.map((lang) => `${lang.name}, `)}
                        </TableCell>
                        <TableCell>
                          {item?.timezones?.toString().split(',').join(' ')}
                        </TableCell>
                      </TableRow>
                    ))
                : regionFilterTerm !== 'all' // case-10
                ? data
                    .filter(
                      (item: ItemType) =>
                        item?.region?.toLowerCase() ===
                        regionFilterTerm!.toLowerCase()
                    )
                    .map((item: ItemType, index: number) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.capital}</TableCell>
                        <TableCell>{item.region}</TableCell>
                        <TableCell>{item.population}</TableCell>
                        <TableCell>
                          {item?.languages?.map((lang) => `${lang.name}, `)}
                        </TableCell>
                        <TableCell>
                          {item?.timezones?.toString().split(',').join(' ')}
                        </TableCell>
                      </TableRow>
                    ))
                : populationFrom && populationTo // case-11
                ? data
                    .filter(
                      (item: ItemType) =>
                        item.population! <= populationTo &&
                        item.population! >= populationFrom
                    )
                    .map((item: ItemType, index: number) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.capital}</TableCell>
                        <TableCell>{item.region}</TableCell>
                        <TableCell>{item.population}</TableCell>
                        <TableCell>
                          {item?.languages?.map((lang) => `${lang.name}, `)}
                        </TableCell>
                        <TableCell>
                          {item?.timezones?.toString().split(',').join(' ')}
                        </TableCell>
                      </TableRow>
                    ))
                : searchTerm === '' // case-12
                ? data.map((item: ItemType, index: number) => (
                    <TableRow key={index}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.capital}</TableCell>
                      <TableCell>{item.region}</TableCell>
                      <TableCell>{item.population}</TableCell>
                      <TableCell>
                        {item?.languages?.map((lang) => `${lang.name}, `)}
                      </TableCell>
                      <TableCell>
                        {item?.timezones?.toString().split(',').join(' ')}
                      </TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </DisplaySectionWrapper>
    </>
  )
}
