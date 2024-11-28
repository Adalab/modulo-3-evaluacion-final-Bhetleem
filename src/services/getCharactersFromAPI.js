const getUsersFromApi = () => {
    return fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(data => {
            const parsedCharacters = data.results.map((character) => {
                return {
                    name: character.name,
                    photo: character.image,
                    specie: character.species,
                    id: character.id,
                    planet: character.origin.name,
                    episodes: character.episode.length,
                    status: character.status,
                }
            })
            //console.log(parsedCharacters);
            return parsedCharacters;
        })
}

export default getUsersFromApi;
