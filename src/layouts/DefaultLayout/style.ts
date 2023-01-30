import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  width: 100%;
  height: calc(100vh - 8rem);
  margin: 5rem auto;
  padding: 3rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`
