import React from 'react'
import arrowLeftWhite from '../images/arrow-left-white.svg'
import arrowLeftBlack from '../images/arrow-left-black.svg'
import DetailsDisplay from './DetailsDisplay'
const Details = (props) => {
    const {mode,country,neighbours,removeDetails}=props
    const {capital,tld,flag,population,name,region,subregion,native,currency,languages}=country
  return (
    <section className={`details${mode}`}>
        <div className="container details--container">

        <button onClick={removeDetails} className={`details${mode}--back`}>
            <img src={(mode==="Dark"&& arrowLeftWhite) ||(mode==='Light'&& arrowLeftBlack)} alt="" />
           <span>Back</span>  
           </button>
           <div className="details--main">   

           <div className="details--img">
            <img src={flag} alt="flag" />
        </div>

        <div className={`details${mode}--info`}>

            <h2 className="details--name">{name}</h2>

            <DetailsDisplay 
            country={country}
            mode={mode}
            neighbours={neighbours}
            />
     <div className="details--borders">
        <p className='fw-semi'>Border Countries :</p>
         <div className='details--neighbours'>
            {neighbours.slice(0,12).map((neighbour,i)=>(
                <p className={`details${mode}--neighbour`}>{neighbour}</p>
            ))}
         </div>
     </div>

        
        </div>


        </div>

     </div>
    </section>
  )
}

export default Details