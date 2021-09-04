import { TextField } from '@material-ui/core'

interface PropsType {
	value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function ToField({ ...restProps }: PropsType) {
  return (
    <TextField
      id='to'
      variant='outlined'
      label='To ex: 1000000'
      size='small'
      margin='none'
      type='number'
      color='primary'
      autoComplete='off'
      {...restProps}
    />
  )
}
