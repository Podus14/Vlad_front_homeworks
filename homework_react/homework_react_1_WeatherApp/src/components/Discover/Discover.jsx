import React from "react"
import Style from "./discover.module.css"
import { Search } from "./components/Search";

export const Discover = () => {
    return (
        <div className={Style.container}>
            <h2 className={Style.text}>WeatherNow
            </h2>
            <Search/>
        </div>
    );
}