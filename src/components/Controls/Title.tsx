import { Typography, Box } from '@material-ui/core'

interface PropType {
  children: string
}

export default function Title({ children }: PropType) {
  return (
    <Box p={3} mb={2}>
      <Typography variant='h2' align='center'>
        {children}
      </Typography>
    </Box>
  )
}
