import { sortAlphabetically, sortNumerically } from "../utils/sortPokemons";

export default function SortButtons({ pokemons, setPokemons }) {
  return (
    <>
      <button onClick={() => setPokemons(sortAlphabetically(pokemons, 'A-Z'))}>
        Sort A-Z
      </button>
      <button onClick={() => setPokemons(sortAlphabetically(pokemons, 'Z-A'))}>
        Sort Z-A
      </button>
      <button onClick={() => setPokemons(sortNumerically(pokemons, 'lowest-highest'))}>
        Lowest to highest number
      </button>
      <button onClick={() => setPokemons(sortNumerically(pokemons, 'highest-lowest'))}>
        Highest to lowest number
      </button>
    </>
  )
}
