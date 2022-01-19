import {useState} from 'react'
import styled from 'styled-components'

const WeatherForecast= (props)=> {
    const [forecast]=useState(props.forecast)
  return (
    <Container>
      <CityTitle>{forecast.title}</CityTitle>
      <ul>
     <InfoList> Temperature:{forecast.consolidated_weather[0].the_temp.toFixed(1)}°C</InfoList> 
     <IconContainer>
     <InfoList>Min:{forecast.consolidated_weather[0].min_temp.toFixed(1)}°C</InfoList> 
     <InfoList> Max:{forecast.consolidated_weather[0].max_temp.toFixed(1)}°C</InfoList>
     </IconContainer>
     <InfoList> Weather: {forecast.consolidated_weather[0].weather_state_name}
      <Icon src={`https://www.metaweather.com/static/img/weather/${forecast.consolidated_weather[0].weather_state_abbr}.svg`}/>
 </InfoList>
     </ul>
     </Container>
  );
}

const Container=styled.div`
text-align:center;
font-size:30px;
`
const Icon=styled.img`
padding-left:20px;
width:40px;
position: relative;
top: 5px;
`
const IconContainer=styled.div`
display:block ruby;
`
const CityTitle=styled.h1`
font-size: 50px;
padding: 20px;
`
const InfoList=styled.li`
padding: 20px;
`

export default WeatherForecast;
