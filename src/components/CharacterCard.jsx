import { Link } from "react-router-dom"
import "../scss/layout/CharacterCard.scss"

function CharacterCard({characterData}) {
    //console.log(characterData);
  return (
    <li className="main_card">
        <Link to={`/character/${characterData.id}`}>
            <img className="main_card_image" src={characterData.photo} alt={characterData.name} />
            <h3 className="main_card_name">{characterData.name}</h3>
            <h4 className="main_card_specie">{characterData.specie}</h4>
        </Link>
    </li>
  )
}

export default CharacterCard
