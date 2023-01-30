import styled from 'styled-components'

export const HistoryContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0.2rem 3.5rem 2.5rem;
  height: 400px;
  max-width: 74rem;
  width: 100%;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }

  @media (max-width: 47rem) {
    height: 450px;
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 1.5rem;

  table {
    min-width: 600px;
    width: 100%;
    border-collapse: collapse;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: center;
      font-size: 0.75rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background: ${(props) => props.theme['gray-700']};
      border-top: ${(props) => props.theme['gray-800']};
      line-height: 1.6;
      font-size: 0.875rem;
      padding: 1rem;
      text-align: center;
    }

    @media (max-width: 47rem) {
      width: 90%;

      th {
        line-height: 1.3;
        padding: 0.8rem;
      }

      td {
        line-height: 1.3;
        padding: 0.7rem;
      }
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  red: 'red-500',
  green: 'green-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.td<StatusProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
