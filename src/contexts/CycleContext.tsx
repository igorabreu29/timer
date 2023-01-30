import { differenceInSeconds } from 'date-fns'
import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  addNewCycleAction,
  InterrupetedCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducer/cycles/actions'
import { Cycle, cyclesReducer } from '../reducer/cycles/reducer'

interface NewCycleFormData {
  task: string
  minutesAmount: number
}

interface CycleContextProps {
  cycle: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: NewCycleFormData) => void
  InterrupetedCurrentCycle: () => void
}

interface CycleContextProviderProps {
  children: ReactNode
}

export const CycleContext = createContext({} as CycleContextProps)

export function CycleContextProvider({ children }: CycleContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycle: [],
      activeCycleId: null,
    },
    () => {
      const getStorageLocal = localStorage.getItem(
        '@aplication-timer: cycles-state-1-0-0',
      )

      if (getStorageLocal) {
        return JSON.parse(getStorageLocal)
      }
    },
  )
  const { cycle, activeCycleId } = cyclesState
  const activeCycle = cycle.find((cycles) => cycles.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })
  useEffect(() => {
    const JSONstate = JSON.stringify(cyclesState)

    localStorage.setItem('@aplication-timer: cycles-state-1-0-0', JSONstate)
  }, [cyclesState])

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function createNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))
    setAmountSecondsPassed(0)
  }

  function InterrupetedCurrentCycle() {
    dispatch(InterrupetedCurrentCycleAction())
    document.title = 'Timer'
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  return (
    <CycleContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        InterrupetedCurrentCycle,
        cycle,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}
