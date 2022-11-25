import React from 'react'
import iconBlack from '../images/icon-search-black.svg'
import iconWhite from '../images/icon-search-white.svg'
import arrowWhite from '../images/arrow-white.svg'
import arrowBlack from '../images/arrow-black.svg'


const Inputs = (props) => {
    const {mode,optionsOpenHandler,openOptions,region,countryInputHandler}=props;
  return (
    <section  className={`inputs${mode}`}>
        <div className="container inputs--container">

        <div className={`inputs${mode}--search`}>
            <div className={`inputs${mode}--icon`}><img src={(mode==='Dark'&&iconWhite) ||(mode==='Light'&&iconBlack)} alt="" />
            </div>
            <input onKeyDown={(e)=>countryInputHandler(e)} className={`inputs--searchBar`} type="search" name="search" id="search" placeholder='Search for a country' />
        </div>

        <div onClick={optionsOpenHandler} style={{position:'relative'}} >
          <div  className={`inputs${mode}--filter`}>
               <p>{region || 'Filter by Region'}</p>
                <div className={`inputs--arrow`}>
                    <img style={{transform:(openOptions&&'rotate(180deg)')||'none'}} src={(mode==='Dark'&&arrowWhite)||(mode==='Light'&&arrowBlack)} alt="" /> 
             </div>

          </div>

             <div  className={`inputs${mode}--options ${openOptions?'':'hide'}`}>
                <button className='inputs--option'>Africa</button>
                <button className='inputs--option'>America</button>
                <button className='inputs--option'>Asia</button>
                <button className='inputs--option'>Europe</button>
                <button className='inputs--option'>Oceania</button>
             </div>

        </div>
        
        </div>
    </section>
  )
}

export default Inputs