import { useContext } from 'react'
import { CycleContext } from '../../contexts/CycleContext'
import { formatDistanceToNow } from 'date-fns'
import { HistoryContainer, HistoryList, Status } from './style'
import { ptBR } from 'date-fns/locale'

export function History() {
  const { cycle } = useContext(CycleContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycle.map((cycles) => {
              return (
                <tr key={cycles.id}>
                  <td>{cycles.task}</td>
                  <td>{cycles.minutesAmount}</td>
                  <td>
                    {formatDistanceToNow(new Date(cycles.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycles.finishedDate && (
                      <Status statusColor="green">Finalizado</Status>
                    )}
                    {cycles.interrupetedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}
                    {!cycles.interrupetedDate && !cycles.finishedDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
