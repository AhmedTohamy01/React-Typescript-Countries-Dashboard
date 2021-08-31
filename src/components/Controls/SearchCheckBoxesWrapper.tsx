import { ReactNode } from 'react'
import { Box } from '@material-ui/core'

interface PropType {
  children: ReactNode
}

export default function SearchCheckBoxesWrapper({ children }: PropType) {
  return <Box p={1}>{children}</Box>
}
