import { useState } from "react"
import { Discover } from "./components/Discover/Discover"
import { SearchResults } from "./components/SearchResults/SearchResults";

function App() {
  const [searchCurrentWeather, setSearchCurrentWeather] = useState(null);
  const [searchForecast, setSearchForecast] = useState(null);
  return ( 
    <main className="container">
      <Discover setSearchCurrentWeather = {setSearchCurrentWeather} searchCurrentWeather = {searchCurrentWeather} setSearchForecast = {setSearchForecast}/>
      <SearchResults searchCurrentWeather = {searchCurrentWeather} searchForecast = {searchForecast}/>
    </main>
  )
}

export default App
