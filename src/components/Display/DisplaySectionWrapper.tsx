import { ReactNode } from 'react'
import { Box } from '@material-ui/core'

interface PropType {
  children: ReactNode
}

export default function DisplaySectionWrapper({ children }: PropType) {
  return <Box p={4}>{children}</Box>
}
