import React from "react";
import Style from "./Forecast.module.css"
import { ForecastCard } from "./components/ForecastCard";

export const Forecast = ({ searchForecast }) => {
    return (
        <>
            <h3 className={Style.text}>5-Day Forecast</h3>
            {console.log(searchForecast)}
            <div className={Style.container}>
                {searchForecast.filteredDataForecast.map((day, index) => {
                    return <ForecastCard key= {index} day = {day}/>
                }            
                )}
            </div>
        </>
    )
}