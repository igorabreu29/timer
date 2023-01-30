import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.125rem;
  font-weight: bold;
  flex-flow: wrap;
  color: ${(props) => props.theme['gray-100']};
  gap: 0.5rem;

  @media (max-width: 47rem) {
    font-size: 1rem;
  }
`

export const BaseInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 3px solid ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme['gray-100']};
  height: 2.5rem;
  font-weight: bold;
  font-size: 1.125rem;

  &:disabled {
    opacity: 0.7;
  }

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    ${(props) => props.theme['gray-500']};
  }

  @media (max-width: 47rem) {
    font-size: 1rem;
    height: 2rem;
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  text-align: center;
  width: 4rem;
`
