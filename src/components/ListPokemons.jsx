import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPokemons } from "../services/getPokemons";

export default function ListPokemons() {
  const [pokemons, setPokemons] = useState();
  const [previousPokemons, setPreviousPokemons] = useState();
  const [nextPokemons, setNextPokemons] = useState();
  const [dataUrl, setDataUrl] = useState(null);

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
      <h1>all pokemons</h1>
      <button onClick={() => setDataUrl(previousPokemons)}>Previous</button>
      <button onClick={() => setDataUrl(nextPokemons)}>Next</button>
      <br />
      {pokemons?.map((pokemon) => {
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
