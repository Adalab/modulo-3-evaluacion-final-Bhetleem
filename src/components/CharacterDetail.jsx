import "../scss/layout/CharacterDetail.scss";

function CharacterDetail({character}) {
  return (
    <div className="containerSelectedCard">
    <section className="selectedCard">
        <img className="selectedCard_image" src={character.photo} alt={character.name} />
        <h3 className="selectedCard_name">{character.name}</h3>
        <h5 className="selectedCard_specie">{character.specie}</h5>
        <h5 className="selectedCard_planet">From {character.planet}</h5>
        <h5 className="selectedCard_episodes">{character.episodes} episodes</h5>
        <h5 className="selectedCard_status">It's {character.status}</h5>
    </section>
    </div>
  )
}

export default CharacterDetail
