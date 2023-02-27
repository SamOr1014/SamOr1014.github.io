import { Container } from '@mui/material'
import styled from 'styled-components'
import { LandingView } from './components/LandingView'
import './style/global.css'
import { AboutMe } from './components/AboutMe'

function App() {
  return (
    <StyledContainer maxWidth={'xl'}>
      <LandingView />
      <AboutMe />
    </StyledContainer>
  )
}

export default App

const StyledContainer = styled(Container)`
  /* background-color: #80808063; */
  height: 100vh;
  padding: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
`
