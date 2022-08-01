import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPokemons } from "../services/getPokemons";
import SearchBox from "./SearchBox";
import SortButtons from "./SortButtons";

export default function ListPokemons() {
  const [pokemons, setPokemons] = useState();
  const [previousPokemons, setPreviousPokemons] = useState();
  const [nextPokemons, setNextPokemons] = useState();
  const [dataUrl, setDataUrl] = useState(null);
  const [pokemonToSearch, setPokemonToSearch] = useState();

  useEffect(() => {
    async function getPokemons(url) {
      const response = await getAllPokemons(url);
      setPokemons(response?.results);
      setPreviousPokemons(response?.previous);
      setNextPokemons(response?.next);
    };
    getPokemons(dataUrl);
  }, [dataUrl]);
  return (
    <>
      <SearchBox setPokemonToSearch={setPokemonToSearch}/>
      <br />
      <SortButtons pokemons={pokemons} setPokemons={setPokemons} />
      <br />
      <button onClick={() => setDataUrl(previousPokemons)}>Previous</button>
      <button onClick={() => setDataUrl(nextPokemons)}>Next</button>
      <br />
      {pokemonToSearch && (
        <>
          <h3>{pokemonToSearch.id}. {pokemonToSearch.name}</h3>
          <img src={pokemonToSearch.sprites['front_default']} alt={pokemonToSearch.name} />
        </>
      )}
      {!pokemonToSearch && pokemons?.map((pokemon) => {
        return (
          <>
            <div>
              <h3>{pokemon.details.id}. {pokemon.name}</h3>
              <img src={pokemon.details.sprites['front_default']} alt={pokemon.name} />
              <br />
              <button>
                <Link to={'#'}>Details</Link>
              </button>
            </div>
          </>
        )
      })}
    </>
  )
};
