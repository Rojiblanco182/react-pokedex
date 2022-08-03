import { Button } from "@mui/material";
import { sortAlphabetically, sortNumerically } from "../utils/sortPokemons";


export default function SortButtons({ pokemons, setPokemons, hidden = false }) {
  const buttonsStyle = { margin: '3px', display: hidden && 'none' };
  return (
    <>
      <Button
        variant="outlined"
        sx={buttonsStyle}
        onClick={() => setPokemons(sortAlphabetically(pokemons, 'A-Z'))}
      >
        Sort A-Z
      </Button>
      <Button
        variant="outlined"
        sx={buttonsStyle}
        onClick={() => setPokemons(sortAlphabetically(pokemons, 'Z-A'))}
      >
        Sort Z-A
      </Button>
      <Button
        variant="outlined"
        sx={buttonsStyle}
        onClick={() => setPokemons(sortNumerically(pokemons, 'lowest-highest'))}
      >
        Lowest to highest number
      </Button>
      <Button
        variant="outlined"
        sx={buttonsStyle}
        onClick={() => setPokemons(sortNumerically(pokemons, 'highest-lowest'))}
      >
        Highest to lowest number
      </Button>
    </>
  )
}
