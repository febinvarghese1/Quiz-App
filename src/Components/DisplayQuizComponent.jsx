import React from 'react'
import DisplayMainOptions from './DisplayMainOptions'

const DisplayQuizComponent = ({id,question,type,answers,options}) => {
  return (
    <div className='displayquiz'>
        <div className="displayquiz__top">
        <span>{id}.</span><h1>{question}</h1>
        </div>
        <div className="displayquiz__bottom">
            
             {options?.map((option,index)=>(
                <DisplayMainOptions option={option} id={index} key={index} />
             ))}
        </div>
    </div>
  )
}

export default DisplayQuizComponent