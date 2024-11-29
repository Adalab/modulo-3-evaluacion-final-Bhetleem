import CharacterCard from "./CharacterCard";
import "../scss/layout/CharacterList.scss";

function CharacterList({characters, filterName}) {
    //console.log(characters);
    //console.log(filterName);
  if (characters.length === 0){
    return <p className="characterList_message">No hay personajes que coincidan con la búsqueda: {filterName}</p>
  }

// const characterItems = characters.map((character) => {
//     //console.log(character);
//   return <CharacterCard characterData={character} key={character.id} />
// })
    
    const characterItems = characters
      .sort((a,b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      return 0;
      })
      .map((character) => { 
      return <CharacterCard characterData={character} key={character.id} />
      });

     console.log(characterItems);    

  return (
    <ul className="main_list">
        {characterItems}
    </ul>
  )
}

export default CharacterList
