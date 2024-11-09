import React from "react"
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather"
import { Forecast } from "./components/Forecast/Forecast"

export const SearchResults = ( {searchCurrentWeather} ) => {

    if (!searchCurrentWeather) {
        return <div>No information for this city</div>;
    }

    return (
        <>
            <CurrentWeather searchCurrentWeather = {searchCurrentWeather}/>
            <Forecast/>
        </>
    )
}