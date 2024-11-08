import React from "react"
import { CurrentWeather } from "./components/CurrentWeather"

export const SearchResults = ( {searchResults} ) => {

    if (!searchResults) {
        return <div>No information for this city</div>;
    }


    return (
        <div>
            {/* {
                searchResults.map(searchResults)
                } */}
            
        </div>
    )
}