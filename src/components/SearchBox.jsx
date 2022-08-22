import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useState } from 'react';
import { getPokemonDetails } from "../services/getPokemons";

export default function SearchBox({ setPokemonToSearch }) {
  const [userInput, setUserInput] = useState();
  const searchPokemon = async () => {
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
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Button
          variant="contained"
          startIcon={<SearchIcon />}
          sx={{ height: '21px' }}
          onClick={async () => await searchPokemon()}
        />
      </div>
    </>
  )
}