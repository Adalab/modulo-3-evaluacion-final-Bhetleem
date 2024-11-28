import CharacterCard from "./CharacterCard";

function CharacterList({characters}) {
    //console.log(characters);

    const characterItems = characters.map((character) => {
        //console.log(character);
        return <CharacterCard characterData={character} key={character.id} />
    })
    

  return (
    <ul>
        {characterItems}
    </ul>
  )
}

export default CharacterList
