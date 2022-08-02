import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PhraseListPage from "./pages/PhraseListPage";
import TranslatedPhrasesPage from "./pages/TranslatedPhrasesPage";
import EditPhrasePage from "./pages/EditPhrasePage";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

import LanguagesList from "./components/LanguagesList";
import LanguageDetails from "./components/LanguageDetails";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
const [LanguagesData, setLanguagesData] = useState(null);
useEffect(() => {

  axios.get("http://localhost:3001/languages")
  .then((response) => {
    console.log(response);
    setLanguagesData(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
}, []);

if (!LanguagesData){
  return <p>Loading pages</p>
  }

  return (
    <div className="App">
      <Navbar />

      <Routes>      
        <Route path="/" element={<HomePage />} />

        <Route
          path="/phrases"
          element={ <IsPrivate> <PhraseListPage /> </IsPrivate> } 
        />

        <Route
          path="/phrases/:phraseId"
          element={ <IsPrivate> <TranslatedPhrasesPage /> </IsPrivate> }
        />

        <Route
          path="/phrases/edit/:phraseId"
          element={ <IsPrivate> <EditPhrasePage /> </IsPrivate> } 
        />
        
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />

        <Route path="/LanguagesList" element={<LanguagesList languagesData={LanguagesData} />} />
        <Route path="/:id" element={<LanguageDetails languagesData={LanguagesData} />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
