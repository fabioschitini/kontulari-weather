import {useState,useEffect} from 'react'
import styled from 'styled-components'

const WeatherForecast=(props)=> {
    
  const [forecast,setForecast]=useState({})
  const [loading,setLoading]=useState(false)

  return (
    <Container>
      <SearchBox setForecast={setForecast} setLoading={setLoading}/>
     </Container>
  );
}

const Container=styled.div`


`

export default App;
