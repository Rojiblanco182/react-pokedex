import { getPokemonDetails } from "../services/getPokemons";

export default function SearchBox({ setPokemonToSearch }) {
  const searchPokemon = async (userInput) => {
    if (!userInput) {
      setPokemonToSearch(null);
      return;
    }

    let pokemon;

    try {
      pokemon = await getPokemonDetails(userInput.toLowerCase());
    } catch (error) {
      pokemon = null;
    }
    setTimeout(() => {
      setPokemonToSearch(pokemon);
    }, 1000);
  }

  return (
    <>
      <div className="searchBox">
        <label htmlFor="searchBox">Search Pokemon by name or number: </label>
        <input
          type="text"
          placeholder="Pikachu or 25"
          id="searchBox"
          onChange={async (e) => {
          await searchPokemon(e.target.value);
        }}/>
      </div>
    </>
  )
}