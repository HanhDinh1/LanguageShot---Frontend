import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import languages from '../language-codes-array.json';

const LanguageDetails = ({ languagesData }) => {
    const {id} = useParams();

    const [targetLang, setTargetLang] = useState();

    useEffect(() =>{
        const findLanguage = languagesData.find((language) => {
            return language["639-1"] === id;
    })
    console.log(findLanguage)
    if (findLanguage) {
        setTargetLang(findLanguage)
    }
},[id, languagesData]);
//     const findLanguage = languagesData.find((languages) => languages["639-1"] === params.id
//     );
//   const { name, nativeName, ["639-1"], family, wikiUrl } = findLanguage;
//   console.log(params);

//   const listwikiUrl = wikiUrl.map(wiki => (
//     <li><Link to={`/${wiki}`} key={wiki}>{languagesData.find(
//     (languages) => languages.(639-1) === wiki).wikiUrl}</Link></li>
//   ))

  return (
    <div className="col-7">
      {targetLang && (<><h1>{targetLang.name}</h1>
      <table className="table text-center">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Native Name</td>
            <td>{targetLang.nativeName}</td>
          </tr>
          <tr>
            <td>Family</td>
            <td>
              {targetLang.family}
            </td>
          </tr>
          <tr>
            <td>Wikipedia</td>
            <td>
              <ul>
              {targetLang.wikiUrl}
              </ul>
            </td>
          </tr>
        </tbody>
      </table></>)} 
    </div>
  );
  };

export default LanguageDetails;