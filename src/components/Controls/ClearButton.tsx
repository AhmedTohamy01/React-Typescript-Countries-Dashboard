import { Button } from '@material-ui/core'

interface PropType {
  children: string
  variant: string
  color: string
  onClick: () => void
  size: string
}

export default function ClearButton({ children }: PropType) {
  return <Button>{children}</Button>
}
