import React from 'react'
import Country from './Country';

const Display = (props) => {

    const {countries,mode}=props
   
  return (

   <section className={`display${mode}`}>
    <div className="container display--container">
{countries?.map((country,i)=>{
    return ( 
      <Country key={i} 
      mode={mode}
      country={country}
      />
    )
})}
  </div>
   </section>
  )
}

export default Display