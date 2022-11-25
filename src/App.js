import './App.scss';
import React,{useCallback,useState,useEffect} from 'react';
import Heading from './Components/Heading';
import Inputs from './Components/Inputs';
import Display from './Components/Display';
import Details from './Components/Details';
const urlName=(name)=>{
  return `https://restcountries.com/v3.1/name/${name}?fullText=true`
}
const urlCode=code=>`https://restcountries.com/v3.1/alpha/${code}`
const url='https://restcountries.com/v3.1/'
function App() {
  const [mode,setMode]=useState("Dark")
  const [countries,setCountries]=useState()
  const [country,setCountry]=useState()
  const [region,setRegion]=useState()
  const [openOptions,setOpenOptions]=useState(false)
    const [isLoading,setIsLoading]=useState(false)
  const [error,setError]=useState()
  const [neighbours,setNeighbours]=useState([])
  const changeMode=()=>{
   if(mode==='Dark')setMode('Light')
   else if(mode==="Light") setMode('Dark')
  }
const removeDetails=()=>{
  setNeighbours([])
}

  const getNeighbors=async(value)=>{
 const response=await fetch(urlCode(value))
 const data=await response.json()
setNeighbours((prev)=>prev.concat(data[0].name.common))
  }
const countryHandler=async(value)=>{
 setIsLoading(true)
    setError(null)
    try{ 
      const response=await fetch(urlName(value))
      if(!response.ok){
      throw new Error('something went wrong')
    }
 const data=await response.json();
 console.log(data);
 let rendered=data[0];
 rendered={
  name:rendered.name.common,
  population:rendered.population.toLocaleString(),
  capital:rendered.capital,
  native:rendered.name.nativeName[Object.keys(rendered.name.nativeName)[0]].common,
  borders:rendered.borders,
  currency:rendered.currencies[Object.keys(rendered.currencies)[0]].name,
  region:rendered.region,
  subregion:rendered.subregion,
  languages:Object.values(rendered.languages),
  flag:rendered.flags.svg||rendered.flags.png,
  tld:rendered.tld[0]
}
 console.log(rendered);
   setCountry(rendered)
   rendered.borders.forEach(border=>getNeighbors(border))
      setIsLoading(false)
    
    }
catch(error) {
 setError(error.message)
   setIsLoading(false)

}

     
}


  const getCountries =useCallback(async(ext)=>{
       setIsLoading(true)
    setError(null)
    try{ 
      const response=await fetch(`${url}${ext}`)
      if(!response.ok){
      throw new Error('something went wrong')
    }
 const data=await response.json()
 const items =data.map(item=>{

  return {
  name:item.name.common,
  population:item.population.toLocaleString(),
  region:item.region,
  capital:item.capital,
flag:item.flags.svg
  }
 })
       setCountries(items)
      setIsLoading(false)
}
catch(error) {
 setError(error.message)
   setIsLoading(false)
}

  },[])

 useEffect(()=>{
 getCountries('all')
},[getCountries])


  function optionsOpenHandler(e){
setOpenOptions((prev)=>!prev)
if(e.target.textContent==='Filter by Region' ||!e.target.textContent) return;
else setRegion(e.target.textContent)
  }
useEffect(()=>{
  region && getCountries(`region/${region}`) || getCountries('all')
},[region])

 const countryInputHandler=(e)=>{
  if(e.key!=='Enter')return
   countryHandler(e.target.value);
 }
  return (
    <main className={`App${mode} fs-body ${neighbours.length>0&&!error&&'detail'}`}>
    <Heading  
    mode={mode}
    changeMode={changeMode}/>
    {!neighbours.length>0 && !error && 
    <>
    <Inputs 
    mode={mode} 
    optionsOpenHandler={optionsOpenHandler}
  openOptions={openOptions}
    region={region}
    countryHandler={countryHandler}
    countryInputHandler={countryInputHandler}
    />
    <Display mode={mode} countries={countries} />
    </>
    }
{neighbours.length>0&&!error &&  <Details 
country={country}
neighbours={neighbours}
mode={mode}
removeDetails={removeDetails}
/>}
{error && <div style={{marginTop:'5rem',color:`${mode==='Dark'?'white':'black'}`,textAlign:'center',fontSize:'2rem'}}>Enter the full name of the country
<button style={{color:'inherit',marginInline:'auto',fontSize:'inherit',backgroundColor:`${mode==='Dark'?'hsl(209, 23%, 22%)':'hsl(0, 0%, 52%)'}`,padding:'0.5rem 2rem',marginTop:'2rem',borderRadius:'5px'}} onClick={()=>setError()}>OK</button>
</div>}

{isLoading && <div style={{marginTop:'5rem',color:`${mode==='Dark'?'white':'black'}`,textAlign:'center',fontSize:'2rem'}}>Content loading...</div>}
    </main>
    
  );
}

export default App;
