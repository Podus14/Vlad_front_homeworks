import React, { useState } from "react";
import Style from "./search.module.css"
import SearchIcon from "./icons/search.svg"
import {toUpperFirstLetter} from "./toUpperFirstLetter.js"

export const Search = ({setSearchCurrentWeather, searchCurrentWeather,  setSearchForecast}) => {
    
    const [searchText, setSearchText] = useState("");

    async function searchCurrentWeatherF(searchText) {
        const response = await fetch(
            `https://open-weather13.p.rapidapi.com/city/${searchText}/EN`,
        {
            headers: {
                "x-rapidapi-host": "open-weather13.p.rapidapi.com",
                "x-rapidapi-key": "a24569974emshfc4eb41cfaf16c6p1162a0jsn17a6c0ed382b"
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
                "x-rapidapi-key": "a24569974emshfc4eb41cfaf16c6p1162a0jsn17a6c0ed382b"
            }
        }
        );
        const data = await response.json();
        return data;
    }

    async function handleSearch () {
        const data = await searchCurrentWeatherF(searchText);
        const dataForecast = await searchForecast(data.coord.lon, data.coord.lat);
        
        
        const selectedIndices = [7, 15, 23, 31, 39];
        const filteredDataForecast = selectedIndices.map(index => {
            const item = dataForecast.list[index];
            const date = new Date(item.dt_txt);
            const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
            const fahrenheit = (item.main.temp - 273.15) * 9/5 + 32;
            return {
                day: dayOfWeek,
                temperature: Math.round(fahrenheit),
                description: item.weather[0].description
            };
        });

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
        setSearchForecast({filteredDataForecast})
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