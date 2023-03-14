import React from 'react'

const QuizTypeComponent = () => {

  

  return (
    <div className='singlequiz__type'>
    <select name="Question Type">
        <option value="dropdown">DropDown</option>
        <option value="radio">Radio</option>
        <option value="checkbox">CheckBox</option>
    </select>
    </div>
  )
}

export default QuizTypeComponent