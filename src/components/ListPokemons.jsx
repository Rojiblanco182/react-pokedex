import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import { getAllPokemons } from "../services/getPokemons";
import PokemonCard from "./PokemonCard";
import SearchBox from "./SearchBox";
import SortButtons from "./SortButtons";
import { Button } from "@mui/material";

export default function ListPokemons() {
  const [pokemons, setPokemons] = useState();
  const [previousPokemons, setPreviousPokemons] = useState();
  const [nextPokemons, setNextPokemons] = useState();
  const [dataUrl, setDataUrl] = useState(null);
  const [pokemonToSearch, setPokemonToSearch] = useState();
  const buttonsStyle = { margin: '1%', display: pokemonToSearch && 'none' };

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
        <SortButtons pokemons={pokemons} setPokemons={setPokemons} hidden={!!pokemonToSearch}/>
        <br />
        <Button
          disabled={!previousPokemons}
          variant="contained"
          sx={ buttonsStyle }
          onClick={() => setDataUrl(previousPokemons)}
        >
          Previous
        </Button>
        <Button
          disabled={!nextPokemons}
          variant="contained"
          sx={ buttonsStyle }
          onClick={() => setDataUrl(nextPokemons)}
        >
          Next
        </Button>
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
            <Grid item xs={4} sm={4} align="center">
              <PokemonCard
                pokemon={pokemonToSearch}
                buttonDetails={{ text: 'Details', url: `/pokemon/${pokemonToSearch.id}` }}
              />
            </Grid>
          </>
        )}
        
        {!pokemonToSearch && pokemons?.map((pokemon, idx) => {
          return (
            <Grid item xs={2} sm={1} key={`${idx}-grid-item`} align="center">
              <PokemonCard
                pokemon={pokemon}
                buttonDetails={{ text: 'Details', url: `/pokemon/${pokemon.id}` }}
              />
            </Grid>
          )
        })}
      </Grid>
      <Button
        disabled={!previousPokemons}
        variant="contained"
        sx={ buttonsStyle }
        onClick={() => setDataUrl(previousPokemons)}
      >
        Previous
      </Button>
      <Button
        disabled={!nextPokemons}
        variant="contained"
        sx={ buttonsStyle }
        onClick={() => setDataUrl(nextPokemons)}
      >
        Next
      </Button>
    </>
  )
};
