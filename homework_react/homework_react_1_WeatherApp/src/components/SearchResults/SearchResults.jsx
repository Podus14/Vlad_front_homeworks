import React from "react"
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather"
import { Forecast } from "./components/Forecast/Forecast"
import Style from "./SearchResults.module.css"

export const SearchResults = ( {searchCurrentWeather, searchForecast} ) => {

    if (!searchCurrentWeather) {
        return <div className={Style.text}>Enter the city</div>;
    }

    if(searchCurrentWeather.cod === '404') {
        return <div className={Style.text}>No information for this city</div>
    }

    return (
        <>
            <CurrentWeather searchCurrentWeather = {searchCurrentWeather}/>
            <Forecast searchForecast = {searchForecast}/>
        </>
    )
}