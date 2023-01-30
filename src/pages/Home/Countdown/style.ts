import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  display: flex;
  gap: 1rem;
  color: ${(props) => props.theme['gray-100']};

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media (max-width: 47rem) {
    font-size: 6.5rem;
    line-height: 4rem;
    gap: 0.5rem;

    span {
      padding: 1.5rem 1rem;
    }
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme['green-500']};
`
