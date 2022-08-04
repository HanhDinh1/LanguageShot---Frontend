import { Link } from "react-router-dom";
// import { useState } from "react";
// import languagecodes from "./../language-codes-array.json"
// import SearchBar from "./../components/SearchBar";

const LanguagesList = ({languagesData}) => {
    // const [languagesData, setLanguagesData] = useState(languagecodes);
    return(
        <div className="col-5" style={{maxheight:'90vh', 'overflow': 'scroll'}}>
        {/* <div>
            <SearchBar placeholder="Enter a language..." data={languagecodes} />
        </div> */}
        {languagesData.map((languages) => {
            return(
                <Link to={`/languages/${languages["639-1"]}`} key={languages.name}>
                    <h2>{languages.name}</h2>
                </Link>
            )
        })}
        {/* <div className="list-group">{linkLanguage}</div>   */}
        </div>
    )
}

export default LanguagesList;