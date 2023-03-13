import React from 'react'
import ButtonComponent from './ButtonComponent'

const PreviousQuiz = ({name,questions}) => {
  return (
    <div className='previous'>
        <div className="previous__left">
            <h1>{name}</h1>
            <h3>{questions}</h3>
        </div>
        <div className="previous__right">
            <div className='previous__right_btn'>
                <ButtonComponent value="share"/>
            </div>
        </div>
    </div>
  )
}

export default PreviousQuiz