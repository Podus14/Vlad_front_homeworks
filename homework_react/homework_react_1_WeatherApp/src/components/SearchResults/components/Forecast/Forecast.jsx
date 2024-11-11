import React from "react";
import Style from "./Forecast.module.css"
import { ForecastCard } from "./components/ForecastCard";

export const Forecast = ({ searchForecast }) => {
    return (
        <>
            <h3 className={Style.text}>5-Day Forecast</h3>
            <div className={Style.container}>
                {searchForecast.filteredDataForecast.map((day) => {
                    return <ForecastCard key= {day.day} day = {day}/>
                }            
                )}
            </div>
        </>
    )
}