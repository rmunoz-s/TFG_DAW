import { useState } from "react"

function SearchBar() {

    const[search, setSearch] = useState([]);

    
    return(
        <>
        <input type="search" name="searchBar" id="searchBar" onChange={(e) => setSearch(e.target.value)} />
        </>
    )
}