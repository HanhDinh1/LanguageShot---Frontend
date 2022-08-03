import { Link } from "react-router-dom";
// import EditPhrasePage from "../pages/EditPhrasePage";

// Deconstructing props object directly in the parentheses of the function
function PhraseCard ({ engPhrase, selectedLang, _id }) {
    return(
        <div className="phraseCard card">
      
                <h3>{engPhrase}</h3>
                <p>{selectedLang}</p>
        
            <button><Link to={`/phrases/${_id}`}>
                {/* <h3>{engPhrase}</h3>
                <p>{selectedLang}</p> */}
                Edit
            </Link></button>
            <button>Add to Deck</button>
        </div>
    );
}

export default PhraseCard;