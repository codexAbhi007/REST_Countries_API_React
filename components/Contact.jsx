import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
    const param = useParams()
    console.log(param)
  return (
    <div>
      Contact
    </div>
  )
}

export default Contact
