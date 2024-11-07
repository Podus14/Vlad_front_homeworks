import { useState } from "react"
import { Discover } from "./components/Discover/Discover"
import { SearchResults } from "./components/SearchResults/SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState(null);
  console.log(searchResults);
  return ( 
    <main className="container">
      <Discover setSearchResults={setSearchResults} />
      <SearchResults searchResults= {searchResults}/>
    </main>
  )
}

export default App
