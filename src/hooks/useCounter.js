import { useState } from "react"

export const useCounter = (initialValue=0) => {
  const [counter, setCounter] = useState(initialValue);
  const increase = () => {
    setCounter((prev) => prev + 1)
  }
  const decrease = () => {
    setCounter((prev) => prev - 1)
  }
  const reset = () => {
    setCounter(0)
  }
  return {counter, increase, decrease, reset}
  
}

