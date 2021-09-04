import { ReactNode } from 'react'
import { Box, Paper } from '@material-ui/core'

interface PropType {
  children: ReactNode
}

export default function PopulationFilterWrapper({ children }: PropType) {
  return (
    <Box component={Paper} p={5}>
      {children}
    </Box>
  )
}
