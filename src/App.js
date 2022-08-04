import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
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
import languagecodes from "./language-codes-array.json";

import SearchBar from "./components/SearchBar";
import UserProfile from "./pages/UserProfile";
import DeckPage from "./pages/DeckPage";

function App() {
const [languagesData, setLanguagesData] = useState(languagecodes);

if (!languagesData){
  return <p>Loading pages</p>
  }

  return (
    <div className="App">
      <Navbar />
      <SearchBar placeholder="Enter a language..." data={languagecodes} />

      <Routes>      
        <Route path="/" element={<HomePage languagesData={languagesData} />} />

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

        <Route path="/profile" element={<IsPrivate> <UserProfile /> </IsPrivate>} />

        <Route path="/LanguagesList" element={<LanguagesList languagesData={languagesData} />} />
        <Route path="/languages/:id" element={<LanguageDetails languagesData={languagesData} />} />

        <Route path="/deckPage" element={<DeckPage languagesData={languagesData} />} />
      </Routes>
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;
