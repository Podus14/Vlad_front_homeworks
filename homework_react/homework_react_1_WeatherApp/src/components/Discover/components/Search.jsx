import React, { useState } from "react";
import Style from "./search.module.css"
import SearchIcon from "./search.svg"

export const Search = ({ setSearchResults }) => {
    
    const [searchText, setSearchText] = useState("");

    async function searchCity(searchText) {
        const response = await fetch(
            `https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=5`,
        {
            headers: {
                "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
                "x-rapidapi-key": "96e9d01e1fmsh22e04d05f6dfc4ep1bd543jsn0bbf1b6c78fa"
            }
        }
        );
        const data = await response.json();
        return data;
    }

    async function handleSearch () {
        const data = await searchCity(searchText);
        setSearchResults(data);
    }

    return (
        <div className={Style.container}>
            <input type="text" className={Style.input} placeholder="Entry city name" onChange={e => setSearchText(e.target.value)}/>
            <button className={Style.button} onClick={handleSearch} >
                <img className={Style.img} src={SearchIcon} alt="searchIcon"/>
                <span className={Style.text}>Search</span>
            </button>
        </div>
    )
}