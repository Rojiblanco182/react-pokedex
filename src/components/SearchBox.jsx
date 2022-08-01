import { getPokemonDetails } from "../services/getPokemons";

export default function SearchBox({ setPokemonToSearch }) {
  const searchPokemon = async (userInput) => {
    if (!userInput) {
      return;
    }

    let pokemon;

    try {
      pokemon = await getPokemonDetails(userInput);
    } catch (error) {
      pokemon = null;
    }
    setPokemonToSearch(pokemon);
  }

  return (
    <>
      <label htmlFor="searchBox">Search Pokemon by name or number: </label>
      <input
        type="text"
        placeholder="pikachu or 25"
        id="searchBox"
        onChange={async (e) => {
        await searchPokemon(e.target.value);
      }}/>
    </>
  )
}