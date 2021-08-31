import { ReactNode } from 'react'
import { Box } from '@material-ui/core'

interface PropType {
  children: ReactNode
}

export default function SearchFieldWrapper({ children }: PropType) {
  return <Box p={2}>{children}</Box>
}
