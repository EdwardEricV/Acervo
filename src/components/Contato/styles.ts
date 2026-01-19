import styled from 'styled-components'
import { colors } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  inset: 0;
  display: none;

  &.is-open {
    display: block;
  }
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
`

export const Sidebar = styled.aside`
  position: absolute;
  right: 0;
  top: 0;
  width: 360px;
  height: 100%;
  background-color: ${colors.gray};
  padding: 24px;
  overflow-y: auto;

  h2 {
    margin-bottom: 24px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    gap: 6px;
  }

  input,
  textarea {
    padding: 10px;
    border-radius: 8px;
    border: none;
    resize: none;
  }

  textarea {
    min-height: 120px;
  }
`
