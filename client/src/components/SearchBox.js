import React,{useState} from 'react'
import styled from 'styled-components'
import data from '../data'
import { ReactSearchAutocomplete } from 'react-search-autocomplete' 
import api from '../services/api'
const SearchBox=(props)=> {
  const [locations,setLocations]=useState([])

  const handleOnSearch=async (string,results)=>{
    const result=data.filter(location=>location.name.toLowerCase().includes(string.toLowerCase()))
    setLocations(result)
  }

  const handleOnSelect=(location)=>{
    props.setLoading(true)
api.get(`/?location=${location.name}`)
.then(forecast=>{
  
  props.setForecast(forecast.data)
})
.catch(err=>{
  console.error(err)
})
.finally(()=>{
  props.setLoading(false)
})
  }
  return (
    <Containers>
      <Title>Weather App</Title>
      <ReactSearchAutocomplete
      items={locations}
      onSearch={handleOnSearch}
       onSelect={handleOnSelect}
       autofocus
       placeholder='Write the city where you want to see the weather...'
       />
     </Containers>
  );
}

const Containers=styled.div`
width: 700px;
text-align: center;
margin: auto;
`
const  Title=styled.h1`
font-size: 60px;
border-top-style: solid;
padding-top: 90px;
padding-bottom: 50px;
color:white;
`

export default SearchBox;
