
function CharacterCard({characterData}) {
    //console.log(characterData);
  return (
    <li>
        <img src={characterData.photo} alt="" />
        <h3>{characterData.name}</h3>
        <h5>{characterData.specie}</h5>
    </li>
  )
}

export default CharacterCard
