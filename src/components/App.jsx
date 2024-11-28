import "../scss/App.scss";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import getCharactersFromAPI from "../services/getCharactersFromAPI";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharactersFromAPI().then((charactersData) =>{
      setCharacters(charactersData);
    })
  },[])

  return (
    <>
      <header><h1>Rick and Morty</h1></header>
      <main>
        <CharacterList characters={characters} />
      </main>
    </>
  );
}

export default App;