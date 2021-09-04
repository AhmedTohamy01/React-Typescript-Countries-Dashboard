import { createContext, useState, ReactNode } from 'react'

interface PropsType {
  children: ReactNode
}

interface ContextInterface {
  searchTerm?: string
  setSearchTerm?: (arg0: string) => void
  checkBoxFilterTerm?: string
  setCheckBoxFilterTerm?: (arg0: string) => void
  regionFilterTerm?: string
  setRegionFilterTerm?: (arg0: string) => void
  populationFrom?: any
  setPopulationFrom?: (arg0: any) => void
  populationTo?: any
  setPopulationTo?: (arg0: any) => void
}

export const MainContext = createContext<ContextInterface>({})

export const MainContextProvider = ({ children }: PropsType) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [checkBoxFilterTerm, setCheckBoxFilterTerm] = useState('name')
  const [regionFilterTerm, setRegionFilterTerm] = useState('all')
  const [populationFrom, setPopulationFrom] = useState(null)
  const [populationTo, setPopulationTo] = useState(null)

  return (
    <MainContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        checkBoxFilterTerm,
        setCheckBoxFilterTerm,
        regionFilterTerm,
        setRegionFilterTerm,
        populationFrom,
        setPopulationFrom,
        populationTo,
        setPopulationTo,
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
