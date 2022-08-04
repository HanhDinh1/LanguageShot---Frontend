import { useState } from "react";
// import PhraseCard from "../components/PhraseCard";

function Deck({ phrases }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorite, setFavorite] = useState([]); // <= this state holds the id's of all favorite phrases

// following function handles the operation of adding fav phrases's id's

  const addToFavorite = id => {
    if (!favorite.includes(id)) setFavorite(favorite.concat(id));
    console.log(id);
  };

// this one does the exact opposite, it removes the favorite phrase id's
  const removeFavorite = id => {
    let index = favorite.indexOf(id);
    console.log(index);
    let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
    setFavorite(temp);
  };

// this variable holds the list of favorite phrases, we will use it to render all the fav phrases
  let findfavorite = phrases.filter(phrase => favorite.includes(phrase.id));

// filtered list of phrases
  let filtered = phrases.filter(phrase => {
    if (searchTerm === "") {
      return phrase;
    } else if (phrase.toLowerCase().includes(searchTerm.toLowerCase())) {
      return phrase;
    }
  });

  return (
    <div className="main">
      <div className="phrase__search">
        <input
          type="text"
          onChange={event => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="phrase-container">
        <div className="phrase__list">
          <h2>all phrases</h2>
          {filtered.map(phrase => {
            return (

              <div key={phrase.id} className="phrase__card">               
                <h4 className="phrase__card">
                  {`${phrase}`}
                </h4>
                <button onClick={() => addToFavorite(phrase.id)}>
                  Add
                </button>
              </div>
            );
          })}
        </div>

        <div className="favorite__list">
          <h2>favorite phrases</h2>
          {findfavorite.map(phrase => {
            return (
              <div key={phrase.id} className="phrase__card">
                <img src={phrase.image} alt="foods" width={50} height={50} />   <h2 className="phrase__card">{phrase}</h2>
                <h4 className="phrase__card">
                {`${phrase}`}
                </h4>
                <button onClick={() => removeFavorite(phrase.id)}>
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Deck;
