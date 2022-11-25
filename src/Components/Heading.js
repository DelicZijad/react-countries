import React from 'react'
import sun from '../images/icon-sun.svg'
import moon from '../images/icon-moon.svg'
const Heading = (props) => {
    const {mode,changeMode}=props
  return (
    <section className={`heading${mode}`}>
      <div className="container">
        <h1 className={`heading--title fw-bold`}>Where in the world?</h1>
       <div style={{cursor:'pointer'}} onClick={changeMode} className={`heading${mode}--modes`}><img src={(mode==='Dark'&& sun) || (mode==='Light'&&moon)} alt="" /></div>
     
        </div>
    </section>
  )
}

export default Heading