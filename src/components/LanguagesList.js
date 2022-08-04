import { Link } from "react-router-dom";

const LanguagesList = ({languagesData}) => {
    
    return(
        <div>   
        <h1 className="whichLanguage">Choose Language</h1>   
        {languagesData.map((languages) => {
            return(
                <div>
                <Link to={`/languages/${languages["639-1"]}`} key={languages.name}>
                    <h2 className="languageCard">{languages.name}</h2>
                    {/* <table className="table text-center">
                        <thead></thead>
                        <tbody>
                        <tr>
                            <td style={{ width: '30%' }}>Native Name</td>
                            <td>{languages.nativeName}</td>
                        </tr>
                        <tr>
                            <td>Family</td>
                            <td>
                            {languages.family}
                            </td>
                        </tr>
                        <tr>
                            <td>Wikipedia</td>
                            <td>
                            <ul>
                            {languages.wikiUrl}
                            </ul>
                            </td>
                        </tr>
                        </tbody>
                    </table> */}
                </Link>
                </div>
            )
        })}
        </div>
    )
}

export default LanguagesList;