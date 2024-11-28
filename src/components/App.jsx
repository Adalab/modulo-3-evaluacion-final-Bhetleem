import "../scss/App.scss";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import getCharactersFromAPI from "../services/getCharactersFromAPI";
import FilterByName from "./FilterByName";
import CharacterDetail from "./CharacterDetail";
import { matchPath, Route, Routes, useLocation } from "react-router-dom";

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
  //console.log(filteredCharactersByName);

  const location = useLocation();
  const routeData = matchPath("/character/:idCharacter", location.pathname);
  const urlId = routeData !== null ? String(routeData.params.idCharacter) : null;
  const character = characters.find((char) => {
    //console.log(char.id);
    //console.log(urlId);
    return String(char.id) === urlId;
  })

  return (
    <>
      <header><h1>Rick and Morty</h1></header>
      <main>
        <Routes>
          <Route path="/" element={(
            <>
              <FilterByName onChangeName={handleFilterName} />
              <CharacterList filterName={filterName} characters={filteredCharactersByName} />
            </>
            )}/>
          <Route path="/character/:idCharacter" element={(
            <>
            <CharacterDetail character={character}/>
            </>
          )}  />
        </Routes>
      </main>
    </>
  );
}

export default App;