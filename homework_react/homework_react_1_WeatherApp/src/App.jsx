import { useState } from "react"
import { SearchResults } from "./components/SearchResults/SearchResults";
import { Search } from "./components/Search/Search";
import Style from "./App.module.css"

function App() {
  const [searchCurrentWeather, setSearchCurrentWeather] = useState(null);
  const [searchForecast, setSearchForecast] = useState(null);
  return ( 
    <main className="container">
      <div className={Style.container}>
            <h2 className={Style.text}>WeatherNow</h2>
            <Search setSearchCurrentWeather={setSearchCurrentWeather} setSearchForecast= {setSearchForecast} />
      </div>
      <SearchResults searchCurrentWeather = {searchCurrentWeather} searchForecast = {searchForecast}/>
    </main>
  )
}

export default App
