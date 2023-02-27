import { Avatar, Box } from '@mui/material'
import styled from 'styled-components'
import { useWebMediaQuery } from '../hooks/useMediaQuery'
import pic from '../assets/IMG_8964.jpg'

export const LandingView = () => {
  const { smallerThanMDMediaBreakPoint, smallerThanXLMediaBreakPoint } = useWebMediaQuery()
  return (
    <StyledBox
      fontSize={
        smallerThanMDMediaBreakPoint ? '2rem' : smallerThanXLMediaBreakPoint ? ' 2.5rem ' : '3rem'
      }
    >
      <StyledDiv flex={2}>
        <WelcomeTextDiv>
          <h3>Welcome!!!!</h3>
          <p>I'm Sam OR</p>
          <p>A Full Stack Web Developer</p>
        </WelcomeTextDiv>
      </StyledDiv>
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  height: 100vh;
  width: 100%;
  display: flex;
  gap: 10;
  flex-wrap: wrap;
  justify-content: space-between;
`
const StyledDiv = styled(Box)`
  position: relative;
`
const WelcomeTextDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  > h3,
  p {
    background: -webkit-linear-gradient(white, #38495a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  > p > span {
    background: linear-gradient(
      -45deg,
      var(--color-light-blue),
      var(--color-light-purple),
      var(--color-light-blue),
      var(--color-light-purple)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400% 400%;
    -webkit-animation: gradient 3s ease infinite;
    animation: gradient 3s ease infinite;
  }
`
