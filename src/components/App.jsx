import "../scss/App.scss";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import getCharactersFromAPI from "../services/getCharactersFromAPI";
import FilterByName from "./FilterByName";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    getCharactersFromAPI().then((charactersData) =>{
      setCharacters(charactersData);
    })
  },[])

  const handleFilterName = (nameValueInput) => {
    //console.log(nameValueInput);
    setFilterName(nameValueInput);
  }
  //console.log(filterName);
  const filteredCharactersByName = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  })
  console.log(filteredCharactersByName);

  return (
    <>
      <header><h1>Rick and Morty</h1></header>
      <main>
        <FilterByName onChangeName={handleFilterName} />
        <CharacterList characters={filteredCharactersByName} />
      </main>
    </>
  );
}

export default App;