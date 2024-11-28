
function CharacterDetail({character}) {
  return (
    <section>
        <img src={character.photo} alt={character.name} />
        <h3>{character.name}</h3>
        <h5>{character.specie}</h5>
        <h5>From {character.planet}</h5>
        <h5>{character.episodes} episodes</h5>
        <h5>It's {character.status}</h5>

    </section>
  )
}

export default CharacterDetail
