// import "./SearchWords.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { Link } from "react-router-dom";

function SearchWords({ placeholder, data }) {
const [filteredData, setFilteredData] = useState ([]);
const [wordEntered, setWordEntered] = useState ("");

const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
    setFilteredData([]);
    } else {
        setFilteredData(newFilter);
    }
}
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    }
    return(
        <div className="search">
            <div className="searchInputs">
                <input 
                type="text" 
                placeholder={placeholder} 
                value={wordEntered} 
                onChange={handleFilter}                    
                />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <SearchIcon />
                        ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput}/>
                        )}  
                </div>
            </div>
            {filteredData.length !== 0 && (
            <div className="dataResult">
                {filteredData.map((value, key) => {
                    return (
                        <Link className="dataItem" to={`/languages/${value['639-1']}`}>
                            <p> {value.name} </p>
                    </Link>
                    );
                })}
            </div>
            )}
        </div>
    );
}

export default SearchWords;