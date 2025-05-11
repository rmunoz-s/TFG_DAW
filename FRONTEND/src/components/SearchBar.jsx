import { useState } from "react"

function SearchBar() {

    const[search, setSearch] = useState([]);

    
    return(
        <>
        
        <input type="search" name="searchBar" id="searchBar" className="w-1/4 h-8 rounded-full bg-slate-300" placeholder=" Search something here..." />
        </>
    )
}
//<a target="_blank" href="https://icons8.com/icon/7695/search">Búsqueda</a> icono de <a target="_blank" href="https://icons8.com">Icons8</a>
export default SearchBar;