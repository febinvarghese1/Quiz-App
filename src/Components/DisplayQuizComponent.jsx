import React from 'react'
import DisplayMainOptions from './DisplayMainOptions'

const DisplayQuizComponent = ({id,question,type,answers,options}) => {
  const correctAnswerOption = options.filter(option=> answers.includes(option));
  return (
    <div className='displayquiz'>
        <div className="displayquiz__top">
        <span>{id}.</span><h1>{question}</h1>
        </div>
        <div className="displayquiz__bottom">
          {console.log(answers)}
            
             {options?.map((option,index)=>(
                <DisplayMainOptions option={option} id={index} key={index} correctAnswerOption={correctAnswerOption}/>
             ))}
        </div>
    </div>
  )
}

export default DisplayQuizComponent