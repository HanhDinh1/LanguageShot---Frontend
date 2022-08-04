import { useState } from "react";
import LanguagesList from "./../components/LanguagesList";
import { Link } from "react-router-dom";
import NotePage from "./NotePage";

function HomePage(props) {
  console.log(props);
  const { languagesData } = props;
    return (
      <div className="home-page">

        <div className="home-left">             
            <div className="home-img">
                <img src="/lilPeople.png" alt="homeImg" height="350px"></img>
            </div>
            <div>
              <aside className="quote">
                <i>"To have another language is to possess a second soul."</i> <br/>
                    -Charlemagne-
              </aside>
            </div>         
        </div>

        <div className="home-mid">
        <h1 className="whichLanguage">Choose Language</h1>   
        {languagesData.map((languages) => {
            return(
                <div>
                <Link to={`/languages/${languages["639-1"]}`} key={languages.name}>
                    <h2 className="languageCard">{languages.name}</h2>
                </Link>
                </div>
            )
        })} 
        </div>

        <div className="home-right">
          <NotePage/>
        </div>
        
      </div>
    );
  }
  
  export default HomePage;
