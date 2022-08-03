import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddPhrase from './AddPhrase';
import PhraseCard from './PhraseCard';

const API_URL = 'http://localhost:5005';

const LanguageDetails = ({ languagesData }) => {
    const {id} = useParams();

    const [targetLang, setTargetLang] = useState();
    const [phrases, setPhrases] = useState([]);

    useEffect(() =>{
        const findLanguage = languagesData.find((language) => {
            return language["639-1"] === id;
    })
    console.log(findLanguage)
    if (findLanguage) {
        setTargetLang(findLanguage)
    }
},[id, languagesData]);

function getAllPhrasesForLanguage(id){
  axios.get(`${API_URL}/api/phrases/code/${id}`)
    .then(response =>{
      console.log(response.data)
      setPhrases(response.data.phrasesArray)})
    .catch(err => console.log(err))
}

useEffect(() =>{
  if(id){
    getAllPhrasesForLanguage(id)
  }
},[id]);

  return (
    <div className="col-7">
      <div className="selectedLang">
      {targetLang && (<><h1>{targetLang.name}</h1>
      {/* <table className="table text-center">
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
      </table> */}
      </>
      )
      }
      <AddPhrase languageCode={id} refreshPhrases={() => getAllPhrasesForLanguage(id)}/>
      </div>
      {phrases.map(individualPhrase => {
        return (<div>

        <PhraseCard {...individualPhrase} />
          {/* <h3>{individualPhrase.engPhrase}</h3>
          <p>{individualPhrase.selectedLang}</p> */}
        </div>)
      })}
      
    </div>
  );
  };

export default LanguageDetails;