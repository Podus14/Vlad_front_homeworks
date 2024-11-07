import React from "react";
import Style from "./search.module.css"
import SearchIcon from "./search.svg"

export const Search = () => {
    return (
        <div className={Style.container}>
            <input type="text" className={Style.input} placeholder="Entry city name"/>
            <button className={Style.button}>
                <img className={Style.img} src={SearchIcon} alt="searchIcon"/>
                <span className={Style.text}>Search</span>
            </button>
        </div>
    )
}