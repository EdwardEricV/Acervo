import styled from 'styled-components'
import { colors, breakpoints } from '../../styles'

export const Gallery = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 40px 0;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.div`
  background-color: ${colors.gray};
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.4);
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`

export const CardContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;

  h3 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    opacity: 0.8;
  }
`

export const Button = styled.button`
  margin-top: auto;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: ${colors.green};
  color: ${colors.white};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
