import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './assets/styles/reset.css';
import './assets/styles/main.css';

function App() {
  const [cityName, setCityName] = useState('New York')
  const [country, setCountry] = useState('')
  const [tempData, setTempData] = useState('')
  const [humidData, setHumidData] = useState('')
  const [description, setDescription] = useState('')
  const [dataCityName, setDataCityName] = useState('')
  const [minTemp, setMinTemp] = useState('')
  const [maxTemp, setMaxTemp] = useState('')
  const [unit, setUnit] = useState('F')

  const getCityName = (e) => {
    setCityName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
    e.target.firstChild.value = ''
  }

  const handleToggle = (e) => {
    if(unit === 'F') {
      setTempData(Math.round((tempData - 32) * 5/9))
      setMinTemp(Math.round((minTemp - 32) * 5/9))
      setMaxTemp(Math.round((maxTemp - 32) * 5/9))
    } else {
      setTempData(Math.round((tempData * 9/5) + 32))
      setMinTemp(Math.round((minTemp * 9/5) + 32))
      setMaxTemp(Math.round((maxTemp * 9/5) + 32))
    }
    setUnit(unit === 'F' ? 'C' : 'F')
  }

  useEffect(() => {
    getWeather()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  const getWeather = () => {
    fetch(`//api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=0639fbbaec079cc2d0672607ed590a72`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      setDataCityName(response.name)
      setCountry(response.sys.country)
      setTempData(Math.round(response.main.temp))
      setMinTemp(Math.round(response.main.temp_min))
      setMaxTemp(Math.round(response.main.temp_max))
      setHumidData(response.main.humidity)
      setDescription(response.weather[0].main)
    })
    .catch((error) => {
      console.log('API ERROR')
    })
  }


  return (
    <div className="app">
      <Header 
      cityName={cityName}
      getCityName={getCityName}
      handleSubmit={handleSubmit}
      handleToggle={handleToggle} />
      <MainContent 
      tempData={tempData}
      humidData={humidData}
      description={description}
      cityName={cityName}
      dataCityName={dataCityName}
      country={country}
      unit={unit} />
      <Footer
      tempData={tempData}
      description={description}
      minTemp={minTemp}
      maxTemp={maxTemp}
      unit={unit} />
    </div>
  );
}

export default App;
