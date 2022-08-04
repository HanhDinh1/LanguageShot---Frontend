import { useState } from "react";
// import { Link } from "react-router-dom";
import NotePage from "./NotePage";

import languagecodes from "./../language-codes-array.json"
import SearchBar from "./../components/SearchBar";

function HomePage() {
  const [languagesData, setLanguagesData] = useState(languagecodes);
    return (
      <div className="home-page">
        <div>
        <SearchBar placeholder="Enter a language..." data={languagecodes} />
        </div>
          
        <div className="header">      
          <aside className="quote">
            <i>"To have another language is to possess a second soul."</i> <br/>
                Charlemagne
          </aside>
        </div>    
        <div>
          <NotePage/>
        </div>
      </div>
    );
  }
  
  export default HomePage;
