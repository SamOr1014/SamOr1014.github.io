import { Box } from '@mui/material'
import styled from 'styled-components'

type TTitle = {
  title: string
  paddingX?: string
}

export const Title = ({ title, paddingX = 'none' }: TTitle) => {
  return (
    <StyledBox px={paddingX}>
      <h2>{title}</h2>
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  border: 1px solid white;
  width: max-content;
`
