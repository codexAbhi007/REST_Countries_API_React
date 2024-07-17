import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
  return (
    <div className='error-page'>
       Something Went Wrong! :(
       <p><i>{error.statusText || error.message}</i></p> 
       
    </div>
  )
}

export default Error
