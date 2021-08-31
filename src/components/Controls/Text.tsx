import { Typography } from '@material-ui/core'

interface PropType {
  children: string
}

export default function Text({ children }: PropType) {
  return <Typography variant='h5'>{children}</Typography>
}
