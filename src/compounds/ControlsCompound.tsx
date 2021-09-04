import React, { useState, useContext } from 'react'
import { Grid, Box, Button } from '@material-ui/core'
import { MainContext } from '../context/MainContext'
import CheckBox from '../components/Controls/CheckBox'
import ControlsSectionWrapper from '../components/Controls/ControlsSectionWrapper'
import FiltersWrapper from '../components/Controls/FiltersWrapper'
import RegionFilterWrapper from '../components/Controls/RegionFilterWrapper'
import SearchCheckBoxesWrapper from '../components/Controls/SearchCheckBoxesWrapper'
import SearchField from '../components/Controls/SearchField'
import SearchFieldWrapper from '../components/Controls/SearchFieldWrapper'
import SearchFilterWrapper from '../components/Controls/SearchFilterWrapper'
import Text from '../components/Controls/Text'
import Title from '../components/Controls/Title'
import PopulationFilterWrapper from '../components/Controls/PopulationFilterWrapper'
import FromFieldWrapper from '../components/Controls/FromFieldWrapper'
import FromField from '../components/Controls/FromField'
import ToFieldWrapper from '../components/Controls/ToFieldWrapper'
import ToField from '../components/Controls/ToField'
import ClearButtonWrapper from '../components/Controls/ClearButtonWrapper'

export default function ControlsCompound() {
  const {
    searchTerm,
    setSearchTerm,
    setCheckBoxFilterTerm,
    setRegionFilterTerm,
    populationFrom,
    setPopulationFrom,
    populationTo,
    setPopulationTo,
  } = useContext(MainContext)

  const [isNameCheckBoxChecked, setIsNameCheckBoxChecked] = useState(true)
  const [isCapitalCheckBoxChecked, setIsCapitalCheckBoxChecked] =
    useState(false)
  const [isLangCheckBoxChecked, setIsLangCheckBoxChecked] = useState(false)
  const [isAllRegionsChecked, setAllRegionsChecked] = useState(true)
  const [isAsiaRegionChecked, setIsAsiaRegionChecked] = useState(false)
  const [isAfricaRegionChecked, setIsAfricaRegionChecked] = useState(false)
  const [isEuropeRegionChecked, setIsEuropeRegionChecked] = useState(false)
  const [isAmericasRegionChecked, setIsAmericasRegionChecked] = useState(false)
  const [isOceaniaRegionChecked, setIsOceaniaRegionChecked] = useState(false)
  const [isPolarRegionChecked, setIsPolarRegionChecked] = useState(false)

  function doNameCheckBoxActions() {
    setIsNameCheckBoxChecked(true)
    setIsCapitalCheckBoxChecked(false)
    setIsLangCheckBoxChecked(false)
    setCheckBoxFilterTerm!('name')
  }

  function doCapitalCheckBoxActions() {
    setIsNameCheckBoxChecked(false)
    setIsCapitalCheckBoxChecked(true)
    setIsLangCheckBoxChecked(false)
    setCheckBoxFilterTerm!('capital')
  }

  function doLangCheckBoxActions() {
    setIsNameCheckBoxChecked(false)
    setIsCapitalCheckBoxChecked(false)
    setIsLangCheckBoxChecked(true)
    setCheckBoxFilterTerm!('languages')
  }

  function doAllRegionsCheckBoxActions() {
    setAllRegionsChecked(true)
    setIsAsiaRegionChecked(false)
    setIsAfricaRegionChecked(false)
    setIsEuropeRegionChecked(false)
    setIsAmericasRegionChecked(false)
    setIsOceaniaRegionChecked(false)
    setIsPolarRegionChecked(false)
    setRegionFilterTerm!('all')
  }

  function doAsiaCheckBoxActions() {
    setAllRegionsChecked(false)
    setIsAsiaRegionChecked(true)
    setIsAfricaRegionChecked(false)
    setIsEuropeRegionChecked(false)
    setIsAmericasRegionChecked(false)
    setIsOceaniaRegionChecked(false)
    setIsPolarRegionChecked(false)
    setRegionFilterTerm!('asia')
  }

  function doAfricaCheckBoxActions() {
    setAllRegionsChecked(false)
    setIsAsiaRegionChecked(false)
    setIsAfricaRegionChecked(true)
    setIsEuropeRegionChecked(false)
    setIsAmericasRegionChecked(false)
    setIsOceaniaRegionChecked(false)
    setIsPolarRegionChecked(false)
    setRegionFilterTerm!('africa')
  }

  function doEuropeCheckBoxActions() {
    setAllRegionsChecked(false)
    setIsAsiaRegionChecked(false)
    setIsAfricaRegionChecked(false)
    setIsEuropeRegionChecked(true)
    setIsAmericasRegionChecked(false)
    setIsOceaniaRegionChecked(false)
    setIsPolarRegionChecked(false)
    setRegionFilterTerm!('europe')
  }

  function doAmericasCheckBoxActions() {
    setAllRegionsChecked(false)
    setIsAsiaRegionChecked(false)
    setIsAfricaRegionChecked(false)
    setIsEuropeRegionChecked(false)
    setIsAmericasRegionChecked(true)
    setIsOceaniaRegionChecked(false)
    setIsPolarRegionChecked(false)
    setRegionFilterTerm!('americas')
  }

  function doOceaniaCheckBoxActions() {
    setAllRegionsChecked(false)
    setIsAsiaRegionChecked(false)
    setIsAfricaRegionChecked(false)
    setIsEuropeRegionChecked(false)
    setIsAmericasRegionChecked(false)
    setIsOceaniaRegionChecked(true)
    setIsPolarRegionChecked(false)
    setRegionFilterTerm!('oceania')
  }

  function doPolarCheckBoxActions() {
    setAllRegionsChecked(false)
    setIsAsiaRegionChecked(false)
    setIsAfricaRegionChecked(false)
    setIsEuropeRegionChecked(false)
    setIsAmericasRegionChecked(false)
    setIsOceaniaRegionChecked(false)
    setIsPolarRegionChecked(true)
    setRegionFilterTerm!('polar')
  }

  function doClearButtonActions() {
    setSearchTerm!('')
    setIsNameCheckBoxChecked(true)
    setIsCapitalCheckBoxChecked(false)
    setIsLangCheckBoxChecked(false)
    setCheckBoxFilterTerm!('name')
    setAllRegionsChecked(true)
    setIsAsiaRegionChecked(false)
    setIsAfricaRegionChecked(false)
    setIsEuropeRegionChecked(false)
    setIsAmericasRegionChecked(false)
    setIsOceaniaRegionChecked(false)
    setIsPolarRegionChecked(false)
    setRegionFilterTerm!('all')
    setPopulationFrom!('')
    setPopulationTo!('')
  }

  function doSearchFieldActions(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm!(event.target.value)
  }

  function doFromFieldActions(event: React.ChangeEvent<HTMLInputElement>) {
    setPopulationFrom!(event.target.value)
  }

  function doToFieldActions(event: React.ChangeEvent<HTMLInputElement>) {
    setPopulationTo!(event.target.value)
  }

  return (
    <>
      <ControlsSectionWrapper>
        <Title>Countries Dashboard</Title>
        <FiltersWrapper>
          <Grid item>
            <SearchFilterWrapper>
              <Text>Search Filter</Text>
              <SearchFieldWrapper>
                <SearchField
                  value={searchTerm!}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    doSearchFieldActions(event)
                  }
                />
              </SearchFieldWrapper>
              <SearchCheckBoxesWrapper>
                <CheckBox
                  id='name'
                  label='Name'
                  checked={isNameCheckBoxChecked}
                  onClick={doNameCheckBoxActions}
                />
                <CheckBox
                  id='capital'
                  label='Capital'
                  checked={isCapitalCheckBoxChecked}
                  onClick={doCapitalCheckBoxActions}
                />
                <CheckBox
                  id='language'
                  label='Language'
                  checked={isLangCheckBoxChecked}
                  onClick={doLangCheckBoxActions}
                />
              </SearchCheckBoxesWrapper>
            </SearchFilterWrapper>
          </Grid>
          <Grid item>
            <RegionFilterWrapper>
              <Text>Region Filter</Text>
              <Box>
                <CheckBox
                  id='all'
                  label='All Regions'
                  checked={isAllRegionsChecked}
                  onClick={doAllRegionsCheckBoxActions}
                />
              </Box>
              <Box>
                <CheckBox
                  id='asia'
                  label='Asia'
                  checked={isAsiaRegionChecked}
                  onClick={doAsiaCheckBoxActions}
                />
                <CheckBox
                  id='africa'
                  label='Africa'
                  checked={isAfricaRegionChecked}
                  onClick={doAfricaCheckBoxActions}
                />
                <CheckBox
                  id='europe'
                  label='Europe'
                  checked={isEuropeRegionChecked}
                  onClick={doEuropeCheckBoxActions}
                />
              </Box>
              <Box>
                <CheckBox
                  id='americas'
                  label='Americas'
                  checked={isAmericasRegionChecked}
                  onClick={doAmericasCheckBoxActions}
                />
                <CheckBox
                  id='oceania'
                  label='Oceania'
                  checked={isOceaniaRegionChecked}
                  onClick={doOceaniaCheckBoxActions}
                />
                <CheckBox
                  id='polar'
                  label='Polar'
                  checked={isPolarRegionChecked}
                  onClick={doPolarCheckBoxActions}
                />
              </Box>
            </RegionFilterWrapper>
          </Grid>
          <Grid item>
            <PopulationFilterWrapper>
              <Text>Population Filter</Text>
              <FromFieldWrapper>
                <FromField
                  value={populationFrom}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    doFromFieldActions(event)
                  }
                />
              </FromFieldWrapper>
              <ToFieldWrapper>
                <ToField
                  value={populationTo!}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    doToFieldActions(event)
                  }
                />
              </ToFieldWrapper>
            </PopulationFilterWrapper>
          </Grid>
        </FiltersWrapper>
        <ClearButtonWrapper>
          <Button
            variant='contained'
            color='secondary'
            onClick={doClearButtonActions}
            size='large'
          >
            Clear All Filters
          </Button>
        </ClearButtonWrapper>
      </ControlsSectionWrapper>
    </>
  )
}
