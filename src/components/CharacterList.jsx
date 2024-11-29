import CharacterCard from "./CharacterCard";
import "../scss/layout/CharacterList.scss";

function CharacterList({characters, filterName}) {
    //console.log(characters);
    //console.log(filterName);
  if (characters.length === 0){
    return <p>No hay personajes que coincidan con la búsqueda {filterName}</p>
  }
    
    const characterItems = characters.map((character) => {
        //console.log(character);
        return <CharacterCard characterData={character} key={character.id} />
    })    

  return (
    <ul className="main_list">
        {characterItems}
    </ul>
  )
}

export default CharacterList