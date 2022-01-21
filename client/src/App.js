import {useState,useEffect} from 'react'
//importo os backgorund-image, de acordo com cada clima resultante
import background from './static/background.webp'
import lc from './static/lc/lc.jpg' 
import c from './static/c/c.jpg' 
import h from './static/h/h.jpg' 
import hc from './static/hc/hc.jpg' 
import hr from './static/hr/hr.jpg' 
import lr from './static/lr/lr.jpeg' 
import s from './static/s/s.jpg' 
import sl from './static/sl/sl.jpg' 
import sn from './static/sn/sn.jpg' 
import t from './static/t/t.jpg' 

import styled from 'styled-components'
import SearchBox from './components/SearchBox'
import WeatherForecast from './components/WeatherForecast'
import api from './services/api'


function App() {
  const [forecast,setForecast]=useState({})
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    if(!(Object.keys(forecast).length===0)){
//seleciono cada imagem de clima de acordo com os resultados da pesquisa
      if(forecast.consolidated_weather[0].weather_state_abbr==='lc'){background=lc}
      if(forecast.consolidated_weather[0].weather_state_abbr==='c'){background=c}
      if(forecast.consolidated_weather[0].weather_state_abbr==='hc'){background=hc}
      if(forecast.consolidated_weather[0].weather_state_abbr==='h'){background=h}
      if(forecast.consolidated_weather[0].weather_state_abbr==='sn'){background=sn}
      if(forecast.consolidated_weather[0].weather_state_abbr==='sl'){background=sl}
      if(forecast.consolidated_weather[0].weather_state_abbr==='s'){background=s}
      if(forecast.consolidated_weather[0].weather_state_abbr==='t'){background=t}
      if(forecast.consolidated_weather[0].weather_state_abbr==='hr'){background=hr}
      if(forecast.consolidated_weather[0].weather_state_abbr==='lr'){background=lr}
    }
    if(Object.keys(forecast).length===0){
api
.get('/?location=Salvador')
.then(forecast=>{
  setForecast(forecast.data)
})
.catch(err=>{
  console.log(err)
})
.finally(()=>{
  setLoading(false)
})
    }
  },[forecast])
 
  const Weather=loading||Object.keys(forecast).length===0?(<LoadingText>Loading...</LoadingText>):
  (<WeatherForecast forecast={forecast}/>)

  return (
    <Container>
    <BackGround src={background}/>
      <SearchBox setForecast={setForecast} setLoading={setLoading}/>
      {Weather}
     </Container>
  );
}

const Container=styled.div`
flex-direction:column;
`
const LoadingText=styled.h1`
font-size: 50px;
padding: 80px;
text-align:center;
color:white;
`

const BackGround=styled.img`
pointer-events: none;
position: absolute;
width: 100%;
height: 100%;
min-width:100%;
max-width:100%;
z-index: -1;
object-fit: cover;
`

export default App;
