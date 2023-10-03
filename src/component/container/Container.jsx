import React from 'react'
import './Container.css'

const Container = ({children}) => {
  return (
    <div className='child' >{children}</div>
  )
}

export default Container