import { TextField } from '@material-ui/core'

interface PropsType {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SearchField({ ...restProps }: PropsType) {
  return (
    <TextField
      id='search'
      variant='outlined'
      label='Search here ...'
      size='small'
      margin='none'
      type='search'
      color='primary'
      autoComplete='off'
      {...restProps}
    />
  )
}
