import { sortAlphabetically, sortNumerically } from "../../../src/utils/sortPokemons";
import pokemons from '../../mock-data/pokemons.json';
import pokemonsDetails from '../../mock-data/pokemonsDetails.json';
import { sortedFromAToZ, sortedFromZToA } from "../../mock-data/sortPokemons";

describe('sortPokemons', () => {
  describe('sortAlphabetically', () => {
    it('receives an array of pokemons and sorts them alphabetically from A to Z as default order', () => {
      const expectedOrder = sortedFromAToZ;
      const results = sortAlphabetically(pokemons.results);
      results.forEach((pokemon, idx) => {
        expect(pokemon.name).toBe(expectedOrder[idx]);
      });
    });

    it('receives an array of pokemons and sorts them alphabetically from Z to A if that is the received order', () => {
      const sortingOrder = 'Z-A'; 
      const expectedOrder = sortedFromZToA;
      const results = sortAlphabetically(pokemons.results, sortingOrder);
      results.forEach((pokemon, idx) => {
        expect(pokemon.name).toBe(expectedOrder[idx]);
      });
    });

    it('does not modify the pokemons order if they have the same name', () => {
      let expectedOrder = [sortedFromAToZ[0], ...sortedFromAToZ];
      let repeatedPokemons = {...pokemons};
      repeatedPokemons.results.push(pokemons.results[0]);
      let results = sortAlphabetically(repeatedPokemons.results);
      expect(results[0].name).toBe(expectedOrder[0]);
      expect(results[0].name).toBe(expectedOrder[1]);

      const sortingOrder = 'Z-A';
      expectedOrder = [sortedFromZToA[0], ...sortedFromZToA];
      repeatedPokemons = {...pokemons};
      repeatedPokemons.results.push(pokemons.results[0]);
      results = sortAlphabetically(repeatedPokemons.results, sortingOrder);
      expect(results[0].name).toBe(expectedOrder[0]);
      expect(results[0].name).toBe(expectedOrder[1]);
    });
  });

  describe('sortNumerically', () => {
    let descendingOrderPokemons = [];
    it('receives an array of Pokemons and sorts them by ID, in descending order if indicated', () => {
      const sortingOrder = 'highest-lowest';
      const expectedOrder = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
      descendingOrderPokemons = sortNumerically(pokemonsDetails.results, sortingOrder);
      descendingOrderPokemons.forEach((pokemon, idx) => {
        expect(pokemon.id).toBe(expectedOrder[idx]);
      })
    });

    it('receives an array of Pokemons and sorts them by ID, in ascending order by default', () => {
      const results = sortNumerically(descendingOrderPokemons);
      results.forEach((pokemon, idx) => {
        expect(pokemon.id).toBe(idx + 1);
      })
    });

    it('does not modify the pokemons order if they have the same ID', () => {
      let repeatedPokemons = [...descendingOrderPokemons];
      repeatedPokemons.push(pokemons.results[0]);
      let results = sortNumerically(repeatedPokemons);
      expect(results[0].id).toBe(1);
      expect(results[0].id).toBe(1);

      const sortingOrder = 'highest-lowest';
      const expectedOrder = [20, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
      repeatedPokemons = { ...pokemonsDetails };
      repeatedPokemons.results.push(pokemonsDetails.results[19]);
      results = sortNumerically(repeatedPokemons.results, sortingOrder);
      expect(results[0].id).toBe(expectedOrder[0]);
      expect(results[0].id).toBe(expectedOrder[1]);
    });
  });
});
