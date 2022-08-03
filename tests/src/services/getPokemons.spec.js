import pokemonApi from "../../../src/api/pokemonApi";
import { getAllPokemons, getPokemonDetails } from "../../../src/services/getPokemons";
import pokemons from '../../mock-data/pokemons.json';
import pokemonDetails from '../../mock-data/singlePokemonDetails.json';

jest.mock("../../../src/api/pokemonApi");

beforeEach(() => {
  jest.resetAllMocks();
});

describe('getPokemons', () => {
  describe('getAllPokemons', () => {
    it('should fetch the pokemons information', async () => {
      const mockUrl = 'https://pokeapi.co/api/v2/pokemon/mockUrl';
      const mockApiData = {
        data: pokemons
      };
      const spyOnPokemonApi = jest.spyOn(pokemonApi, 'get').mockResolvedValue(mockApiData);
      await getAllPokemons(mockUrl);

      expect(spyOnPokemonApi).toHaveBeenCalledWith('mockUrl');
    });

    it('does not return anything if it cannot fetch any data', async () => {
      const mockUrl = 'https://pokeapi.co/api/v2/pokemon/mockUrl';
      let spyOnPokemonApi = jest.spyOn(pokemonApi, 'get').mockResolvedValue(undefined);
      await getAllPokemons(mockUrl);

      expect(spyOnPokemonApi).toHaveBeenCalledWith('mockUrl');
    });
  });

  describe('getPokemonDetails', () => {
    it(`gets the specified pokemon's details`, async () => {
      const mockPokemonId = '3';
      const mockApiData = {
        data: pokemonDetails
      };
      const spyOnPokemonApi = jest.spyOn(pokemonApi, 'get').mockResolvedValue(mockApiData);
      await getPokemonDetails(mockPokemonId);

      expect(spyOnPokemonApi).toHaveBeenCalledWith(mockPokemonId);
    });
  });
});
