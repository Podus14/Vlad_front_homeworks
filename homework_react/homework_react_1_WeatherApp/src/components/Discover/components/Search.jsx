import React, { useState } from "react";
import Style from "./search.module.css"
import SearchIcon from "./search.svg"
import {toUpperFirstLetter} from "./toUpperFirstLetter.js"

export const Search = ({setSearchCurrentWeather, searchCurrentWeather,  setSearchForecast}) => {
    
    const [searchText, setSearchText] = useState("");

    async function searchCurrentWeatherF(searchText) {
        const response = await fetch(
            `https://open-weather13.p.rapidapi.com/city/${searchText}/EN`,
        {
            headers: {
                "x-rapidapi-host": "open-weather13.p.rapidapi.com",
                "x-rapidapi-key": "f7ee55ecb5msh2bc31781677730dp10366cjsn670081f4a396"
            }
        }
        );
        const data = await response.json();
        return data;
    }

    async function searchForecast(lon, lat) {
        const response = await fetch(
            `https://open-weather13.p.rapidapi.com/city/fivedaysforcast/${lat}/${lon}`,
        {
            headers: {
                "x-rapidapi-host": "open-weather13.p.rapidapi.com",
                "x-rapidapi-key": "f7ee55ecb5msh2bc31781677730dp10366cjsn670081f4a396"
            }
        }
        );
        const data = await response.json();
        return data;
    }

    async function handleSearch () {
        const data = await searchCurrentWeatherF(searchText);
        setSearchCurrentWeather( {
            city: data.name,
            temperature: Math.round(data.main.temp),
            description: toUpperFirstLetter(data.weather[0].description),
            humidity: data.main.humidity,
            windSpeed: Math.round(data.wind.speed),
            coordinates: {
                lat: data.coord.lat,
                lon: data.coord.lon
            }
        }
        );
        const dataForecast = await searchForecast(searchCurrentWeather.coordinates.lon, searchCurrentWeather.coordinates.lat);
        console.log(dataForecast);
    }

    return (
        <div className={Style.container}>
            <input type="text" className={Style.input} placeholder="Entry city name" onChange={e => setSearchText(e.target.value)}/>
            <button className={Style.button} onClick={handleSearch}>
                <img className={Style.img} src={SearchIcon} alt="searchIcon"/>
                <span className={Style.text}>Search</span>
            </button>
        </div>
    )
}