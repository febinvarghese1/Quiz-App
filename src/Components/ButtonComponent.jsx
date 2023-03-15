import React from 'react'

const ButtonComponent = ({value,onClick}) => {
  return (
    <button className='mainButton' onClick={onClick} >{value}</button>
    )
}

export default ButtonComponent