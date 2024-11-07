import React from "react"
import Style from "./discover.module.css"
import { Search } from "./components/Search";

export const Discover = ({ setSearchResults }) => {
    return (
        <div className={Style.container}>
            <h2 className={Style.text}>WeatherNow
            </h2>
            <Search setSearchResults={setSearchResults} />
        </div>
    );
}