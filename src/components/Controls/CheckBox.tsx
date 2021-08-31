import { Checkbox, FormControlLabel } from '@material-ui/core'

interface PropType {
  id: string
  label: string
  checked: boolean
  onClick: () => void
}

export default function CheckBox({ ...restProps }: PropType) {
  return (
    <FormControlLabel
      control={<Checkbox color='primary' {...restProps} />}
      labelPlacement='end'
      label=''
    />
  )
}
