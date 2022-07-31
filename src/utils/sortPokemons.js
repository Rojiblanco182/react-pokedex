export const sortAlphabetically = (pokemons, order = 'A-Z') => {
  let sortedArray = [...pokemons];

  if (order === 'Z-A') {
    return sortedArray?.sort((pokemonA, pokemonB) => {
      if (pokemonB.name > pokemonA.name) {
        return 1;
      }
      if (pokemonB.name < pokemonA.name) {
        return -1;
      }
      return 0;
    });
  }

  return sortedArray?.sort((pokemonA, pokemonB) => {
    if (pokemonA.name > pokemonB.name) {
      return 1;
    }
    if (pokemonA.name < pokemonB.name) {
      return -1;
    }
    return 0;
  });
}

export const sortNumerically = (pokemons, order = 'lowest-highest') => {
  let sortedArray = [...pokemons];

  if (order === 'highest-lowest') {
    return sortedArray?.sort((pokemonA, pokemonB) => {
      if (pokemonB.details?.id > pokemonA.details?.id) {
        return 1;
      }
      if (pokemonB.details?.id < pokemonA.details?.id) {
        return -1;
      }
      return 0;
    });
  }

  return sortedArray?.sort((pokemonA, pokemonB) => {
    if (pokemonA.details?.id > pokemonB.details?.id) {
      return 1;
    }
    if (pokemonA.details?.id < pokemonB.details?.id) {
      return -1;
    }
    return 0;
  });
}