import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewtype } from '../redux/Actions/actionCreators';

const QuizTypeComponent = () => {

  const dispatch = useDispatch();

  

  return (
    <div className='singlequiz__type'>
    <select name="Question Type" onChange={(e)=> dispatch(addNewtype(e.target.value))}>
        <option value="dropdown">DropDown</option>
        <option value="radio">Radio</option>
        <option value="checkbox">CheckBox</option>
    </select>
    </div>
  )
}

export default QuizTypeComponent