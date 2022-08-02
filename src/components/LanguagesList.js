import { Link } from "react-router-dom";

const LanguagesList = ({languagesData}) => {
    return(
        <div className="col-5" style={{maxheight:'90vh', 'overflow': 'scroll'}}>
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