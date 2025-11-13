import { useState } from 'react';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { ADD_COUNTER,SUBTRACT_COUNTER } from './store/actions';


function App() {
  

  const counter = useSelector(state => state.user)
  const dispatch = useDispatch();

  const handleClickAddCounter = () =>{
    dispatch({type: ADD_COUNTER, recalculate: 1})
  }

  const handleClickSubtractCounter = () =>{
    dispatch({type: SUBTRACT_COUNTER, recalculate: 1})
  }
  return (
    <>
      <div className='box'>
        <button type="button" onClick={handleClickSubtractCounter}>-</button>
        <h1>{counter.count}</h1>
        <button type="button" onClick={handleClickAddCounter}>+</button>
      </div>
    </>
  )
}

export default App
