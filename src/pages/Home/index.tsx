import { Play, HandPalm } from 'phosphor-react'
import { HomeContainer, StartCount, StopCount } from './style'
import { NewCycleForm } from './NewCycleForm'
import { Countdown } from './Countdown'
import * as zod from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { CycleContext } from '../../contexts/CycleContext'

export function Home() {
  const { activeCycle, InterrupetedCurrentCycle, createNewCycle } =
    useContext(CycleContext)

  const newCycleFormValidadeSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa!'),
    minutesAmount: zod.number().min(5).max(60),
  })

  type NewCycleFormData = zod.infer<typeof newCycleFormValidadeSchema>

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidadeSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        {activeCycle ? (
          <StopCount type="button" onClick={InterrupetedCurrentCycle}>
            <HandPalm size={24} />
            Interromper
          </StopCount>
        ) : (
          <StartCount type="submit" disabled={!task}>
            <Play size={24} />
            Começar
          </StartCount>
        )}
      </form>
    </HomeContainer>
  )
}
