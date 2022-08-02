import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { getAllPokemons } from "../services/getPokemons";
import PokemonCard from "./PokemonCard";
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
      <div className="menu">
        <SearchBox setPokemonToSearch={setPokemonToSearch}/>
        <br />
        <SortButtons pokemons={pokemons} setPokemons={setPokemons} />
        <br />
        <button onClick={() => setDataUrl(previousPokemons)}>Previous</button>
        <button onClick={() => setDataUrl(nextPokemons)}>Next</button>
        <br />
      </div>
      
      <Grid
        container
        columns={4}
        rowSpacing={2}
        direction={pokemonToSearch ? 'column' : 'row'}
        alignItems="center"
        justify="center"
      >
        {pokemonToSearch && (
          <>
            <Grid item xs={4} sm={4}>
              <PokemonCard
                pokemon={pokemonToSearch}
                buttonDetails={{ text: 'Details', url: `/pokemon/${pokemonToSearch.id}` }}
              />
            </Grid>
          </>
        )}
        
        {!pokemonToSearch && pokemons?.map((pokemon) => {
          return (
            <Grid item xs={2} sm={1}>
              <PokemonCard
                pokemon={pokemon}
                buttonDetails={{ text: 'Details', url: `/pokemon/${pokemon.id}` }}
              />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
};
