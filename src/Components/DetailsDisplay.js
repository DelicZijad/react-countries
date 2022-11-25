import React from 'react'

const DetailsDisplay = (props) => {
    const {mode,country,neighbours}=props
    const {capital,tld,flag,population,name,region,subregion,native,currency,languages}=country
    
  return (
   <div className="details--display">
                <div className="details--displayUpper">
                    <p className='details--item'>Native name :
                    <span className={`details${mode}--value`}>{native}</span></p>
                    <p className='details--item'>Population :
                    <span className={`details${mode}--value`}>{population}</span></p>
                    <p className='details--item'>Region :
                    <span className={`details${mode}--value`}>{region}</span></p>
                    <p className='details--item'>Sub Region :
                    <span className={`details${mode}--value`}>{subregion}</span></p>
                    <p className='details--item'>Capital :
                    <span className={`details${mode}--value`}>{capital}</span></p>
                </div>
                <div className="details--displayLower">
                    <p className='details--item'>Top Level Domain :
                    <span className={`details${mode}--value`}>{tld}</span></p>
                    <p className='details--item'>Currency :
                    <span className={`details${mode}--value`}>{currency}</span></p>
                    <p className='details--item'>Languages:
                    <span className={`details${mode}--value`}>{languages.join(',')}</span></p>
        
                </div>

            </div>
  )
}

export default DetailsDisplay