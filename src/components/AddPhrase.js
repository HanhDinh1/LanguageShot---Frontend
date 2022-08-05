import { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function AddPhrase(props) {
  const [engPhrase, setEngPhrase] = useState("");
  const [selectedLang, setSelectedLang] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { engPhrase, selectedLang, languageCode: props.languageCode };

    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios
      .post(
        `${API_URL}/api/phrases`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        // Reset the state
        setEngPhrase("");
        setSelectedLang("");
        props.refreshPhrases();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="addPhrase">
      
      <br/>
      <form className="addPhrase-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="engPhrase"
          value={engPhrase}
          placeholder="Add an English phrase..."
          onChange={(e) => setEngPhrase(e.target.value)}
        />
      <br/>
        <textarea
          type="text"
          name="selectedLang"
          value={selectedLang}
          placeholder="Write your translations..."
          onChange={(e) => setSelectedLang(e.target.value)}
        />
        <button type="submit">Submit</button>           
      </form>
    </div>
  );
}

export default AddPhrase;