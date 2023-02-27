import { Avatar, Box } from '@mui/material'
import styled from 'styled-components'
import pic from '../assets/IMG_8288.jpg'
import { useWebMediaQuery } from '../hooks/useMediaQuery'
import { Title } from './Title'

export const AboutMe = () => {
  const { smallerThanMDMediaBreakPoint, smallerThanXLMediaBreakPoint } = useWebMediaQuery()
  return (
    <AboutMeContainer gap={10}>
      <TitleWrapper>
        <Title title={'About Me'} paddingX={'1.5rem'} />
      </TitleWrapper>
      <FlexWrapper>
        <AvatarWrapper>
          <Avatar
            style={{}}
            src={pic}
            sx={{
              width: smallerThanMDMediaBreakPoint ? 350 : 500,
              height: smallerThanMDMediaBreakPoint ? 350 : 500,
            }}
          />
        </AvatarWrapper>
        <AboutMeWrapper
          fontSize={
            smallerThanMDMediaBreakPoint
              ? '1rem'
              : smallerThanXLMediaBreakPoint
              ? ' 1.5rem '
              : '2rem'
          }
        >
          <div>
            <p>
              Greetings ! I'm Sam. I am a nutrition degree graduate who became a web programmer. I'm
              passionate and wish to learn every aspect of web development👨🏽‍💻
            </p>
          </div>
        </AboutMeWrapper>
      </FlexWrapper>
    </AboutMeContainer>
  )
}

const TitleWrapper = styled(Box)`
  display: flex;
  justify-content: center;
`

const AboutMeContainer = styled(Box)`
  padding: 2vw;
  width: 100%;
`
const FlexWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`
const AboutMeWrapper = styled(Box)`
  max-width: 700px;
  display: flex;
  align-items: center;
`
const AvatarWrapper = styled(Box)``
