import pokemonApi from '../api/pokemonApi';

export const getAllPokemons = async (url) => {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  const query = url?.split(baseUrl)[1];
  let data;
  try {
    const response = await pokemonApi.get(query);
    data = response.data;
  } catch {}
  
  if (!data) {
    return;
  }

  await Promise.all(
    data.results?.map(async (pokemon, idx) => {
      const pokemonId = pokemon?.url?.split(baseUrl)[1];
      const pokemonDetails = await getPokemonDetails(pokemonId);
      data.results[idx] = {
        ...data.results[idx],
        ...pokemonDetails
      }
    })
  )
  return data;
}

export const getPokemonDetails = async (pokemonId) => {
  const selectedPokemon = await pokemonApi.get(`${pokemonId}`);
  return selectedPokemon?.data;
};
