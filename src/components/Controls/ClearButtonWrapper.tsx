import { Box } from '@material-ui/core'
import { ReactNode } from 'react'

interface PropType {
  children: ReactNode
}

export default function ClearButtonWrapper({ children }: PropType) {
  return (
    <Box p={1} mt={5} display='flex' justifyContent='center'>
      {children}
    </Box>
  )
}
