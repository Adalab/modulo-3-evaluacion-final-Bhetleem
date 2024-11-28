import { Link } from "react-router-dom"

function CharacterCard({characterData}) {
    //console.log(characterData);
  return (
    <li>
        <Link to={`/character/${characterData.id}`}>
            <img src={characterData.photo} alt={characterData.name} />
            <h3>{characterData.name}</h3>
            <h5>{characterData.specie}</h5>
        </Link>
    </li>
  )
}

export default CharacterCard
