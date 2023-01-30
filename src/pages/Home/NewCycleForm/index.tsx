import { FormContainer, MinutesAmountInput, TaskInput } from './style'
import { useFormContext } from 'react-hook-form'
import { useContext } from 'react'
import { CycleContext } from '../../../contexts/CycleContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CycleContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task"> Vou trabalhar em </label>
      <TaskInput
        id="task"
        list="suggestions"
        placeholder="Dê um nome para seu projeto"
        {...register('task')}
        disabled={!!activeCycle}
      />

      <datalist id="suggestions">
        <option value=""></option>
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        min={5}
        max={60}
        step={5}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos</span>
    </FormContainer>
  )
}
