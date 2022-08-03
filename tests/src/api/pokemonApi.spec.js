import pokemonApi from "../../../src/api/pokemonApi"

describe('pokemonApi', () => {
  test('should contain the right API URL in the Axios property baseURL', () => {
    const expectedUrl = 'https://pokeapi.co/api/v2/pokemon/';
    expect(pokemonApi.defaults.baseURL).toBe(expectedUrl);
  });
});