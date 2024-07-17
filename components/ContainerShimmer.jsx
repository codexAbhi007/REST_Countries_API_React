import React from 'react'
import '../main.css'
const ContainerShimmer = () => {

  return (
    <div className="cardContainer">
        {
            Array.from({length:20}).map((el,index)=>{
                return <div key={index} className="countryCard shimmerCard"></div>
            })
        }
    </div>
  )
}

export default ContainerShimmer
