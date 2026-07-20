import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../features/counter/counterSlice'

const Counter = () => {
    
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const decre = () => {
    dispatch(decrement())
  }

  const incre = () => {
    dispatch(increment())
  }

  return (
    <div className='h-screen bg-amber-100 flex gap-4 justify-center items-center'>
      <button
        onClick={decre}
        className='bg-red-100 text-red-400 rounded-full px-4 py-2'
      >
        Decrement
      </button>

      <p className='text-4xl font-bold'>{count}</p>

      <button
        onClick={incre}
        className='bg-red-100 text-red-400 rounded-full px-4 py-2'
      >
        Increment
      </button>
    </div>
  )
}

export default Counter