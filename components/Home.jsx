import React, {useState } from 'react'


import StatusBar from './StatusBar'

import Container from './Container'
import { useTheme } from '../hooks/useTheme'


const Home = () => {
    const [countryName, setcountryName] = useState('')
    const [region, setregion] = useState('')

  const [isDark] = useTheme()
   
    console.log(isDark)

  return (
    <div className={`main ${isDark?'dark':''}`}>
      <StatusBar setcountryName={setcountryName} setregion={setregion}/>
      <Container countryName={countryName} region={region}/>
    </div>
  )
}

export default Home
