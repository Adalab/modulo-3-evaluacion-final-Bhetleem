const getUsersFromApi = () => {
    return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json")
        .then(res => res.json())
        .then(data => {
            const parsedCharacters = data.results.map((character) => {
                return {
                    name: character.name,
                    photo: character.image,
                    specie: character.species,
                    id: character.id,
                }
            })
            //console.log(parsedCharacters);
            return parsedCharacters;
        })
}

export default getUsersFromApi;

//https://rickandmortyapi.com/api/character