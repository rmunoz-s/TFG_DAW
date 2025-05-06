import { useState } from "react"

function SearchBar() {

    const[search, setSearch] = useState([]);

    setSearch(prev => {
        return prev.filter(item =>
            item.toLowerCase().includes(value.toLowerCase)
        )
    })
    return(
        <>
        <input type="search" name="searchBar" id="searchBar" onChange={(e) => setSearch(e.target.value)} />
        
       
        </>
    )
}