import { ReactNode } from 'react'
import { Box, Paper } from '@material-ui/core'

interface PropType {
  children: ReactNode
}

export default function SearchFilterWrapper({ children }: PropType) {
  return (
    <Box component={Paper} p={4}>
      {children}
    </Box>
  )
}
