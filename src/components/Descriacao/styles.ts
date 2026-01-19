import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

import { colors, breakpoints } from '../../styles'

export const BannerSection = styled.section`
  padding: 40px 0;
`

export const BannerImage = styled.img`
  max-width: 400px;
  width: 100%;
  border-radius: 16px;
  margin-right: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;
    margin-bottom: 24px;
  }
`
export const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Image = styled.img`
  margin-top: 36px;
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;
  border-radius: 16px;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }
`

export const Title = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

export const Prices2 = styled.p`
  font-size: 20px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`

export const ContainerColumn = styled(ContainerFlex)`
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 24px;
`

export const Prices = styled.p`
  font-size: 20px;
  margin-top: 24px;
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.6;

  span {
    text-decoration: line-through;
  }

  button {
    margin-top: 16px;
    align-self: flex-start;
  }
`

export const NewButton = styled.button`
  border: 2px solid ${colors.white};
  color: ${colors.white};
  background-color: ${colors.gray};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`
