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
    console.log(`locationnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn`)
    console.log(location.name)
    props.setLoading(true)
api.get(`/?locations=${location.name}`)
.then(forecast=>{
  console.log(forecast)
  console.log(forecast.data)
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
      <ReactSearchAutocomplete
      items={locations}
      onSearch={handleOnSearch}
       onSelect={handleOnSelect}
       autofocus
       placeholder='Escreva a localizacao que desejar'
       />
     </Containers>
  );
}

const Containers=styled.div`




`

export default SearchBox;
