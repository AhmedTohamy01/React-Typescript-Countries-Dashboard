import { Box } from '@material-ui/core'
import { ReactNode } from 'react'

interface PropType {
  children: ReactNode
}

export default function ControlsSectionWrapper({ children }: PropType) {
  return (
    <Box p={4} display='flex' flexDirection='column'>
      {children}
    </Box>
  )
}
