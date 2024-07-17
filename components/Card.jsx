import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({name,image,countryPop,countryReg,countryCap,data}) => {
  
  return (
    <Link to={`/${name}`} state={data}>
      <div className="countryCard">
        <img src={image} alt="" />
    
        <div className="countryName">{name}</div>
    
        <div className="countryInfo">
            <div className="countryPop"><b>Population: </b>{countryPop}</div>
            <div className="countryReg"><b>Region: </b>{countryReg}</div>
            <div className="countryCap"><b>Capital: </b>{countryCap}</div>
        </div>
      </div>
    </Link>
  )
}

export default Card
