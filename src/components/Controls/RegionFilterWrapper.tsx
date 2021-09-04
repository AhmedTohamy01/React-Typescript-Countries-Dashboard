import { ReactNode } from 'react'
import { Box, Paper } from '@material-ui/core'

interface PropType {
  children: ReactNode
}

export default function RegionFilterWrapper({ children }: PropType) {
  return (
    <Box component={Paper} display='flex' flexDirection='column' p={4}>
      {children}
    </Box>
  )
}
