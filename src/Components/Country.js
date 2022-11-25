import React from 'react'

const Country = (props) => {
    const {mode,country}=props
  return (
  <div  className={`display${mode}--country`}>
    <div className='display--img'><img src={country?.flag} alt="flag" /></div>
 <div className={`display${mode}--info`}>
          <h3 className={`display${mode}--name fw-bold`}>{country?.name}</h3>
        <h4 className={`display${mode}--infoItem`}><span className={`display${mode}--infoSpan fw-medium`}>Population:</span>{country?.population}</h4>
        <h4 className={`display${mode}--infoItem`}><span className={`display${mode}--infoSpan fw-medium`}>Region:</span>{country?.region}</h4>
        <h4 className={`display${mode}--infoItem`}><span className={`display${mode}--infoSpan fw-medium`}>Capital:</span>{country?.capital}</h4>
    </div>
   </div>
  )
}

export default Country