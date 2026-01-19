import styled from 'styled-components'
import { colors, breakpoints } from '../../styles'

export const BooksSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px 0;
`

export const BookCard = styled.div`
  display: flex;
  gap: 24px;
  background-color: ${colors.gray};
  padding: 24px;
  border-radius: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

export const BookImage = styled.img`
  width: 180px;
  height: 260px;
  object-fit: cover;
  border-radius: 8px;
`

export const BookContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 16px;
    line-height: 1.4;
  }
`

export const Button = styled.button`
  align-self: flex-start;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: ${colors.green};
  color: ${colors.white};
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: ${breakpoints.tablet}) {
    align-self: center;
  }
`
