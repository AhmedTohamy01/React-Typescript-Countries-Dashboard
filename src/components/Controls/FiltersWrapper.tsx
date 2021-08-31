import { ReactNode } from 'react'
import { Grid } from '@material-ui/core'

interface PropType {
  children: ReactNode
}

export default function FiltersWrapper({ children }: PropType) {
  return (
    <Grid container spacing={2} justify='center'>
      {children}
    </Grid>
  )
}
