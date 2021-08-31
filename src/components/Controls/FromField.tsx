import { TextField } from '@material-ui/core'

interface PropsType {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FromField({ ...restProps }) {
  return (
    <TextField
      id='from'
      variant='outlined'
      label='From ex: 1000'
      size='small'
      margin='none'
      type='number'
      color='primary'
      autoComplete='off'
      {...restProps}
    />
  )
}
