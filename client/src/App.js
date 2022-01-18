import {useState,useEffect} from 'react'
import background from './static/background.jpg'
import styled from 'styled-components'
import SearchBox from './components/SearchBox'

function App() {
  const [forecast,setForecast]=useState({})
  const [loading,setLoading]=useState(false)

  return (
    <Container>
      <SearchBox setForecast={setForecast} setLoading={setLoading}/>
     </Container>
  );
}

const Container=styled.div`
background-color:blue;
background-image:url(${background});
background-size:cover;
height:100%;
min-height:100vh;

`

export default App;
