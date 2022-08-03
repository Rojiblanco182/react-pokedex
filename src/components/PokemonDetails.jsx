import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { getPokemonDetails } from "../services/getPokemons";
import PokemonCard from "./PokemonCard";

export default function PokemonDetails() {
  const [pokemon, setPokemon] = useState();
  const pokemonId = window.location.pathname.split('/pokemon/')[1];

  useEffect(() => {
    async function getPokemon() {
      setPokemon(await getPokemonDetails(pokemonId));
    }
    getPokemon();
  }, [pokemonId]);

  return (
    <>
      <Grid
        container
        columns={1}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <PokemonCard
            pokemon={pokemon}
            buttonDetails={{text: 'Back', url:'/'}}
          >
            {pokemonAbilities(pokemon)}
            {pokemonType(pokemon)}
          </PokemonCard>
        </Grid>
      </Grid>
    </>
  )
}

const pokemonAbilities = (pokemon) => {
  return (
    <>
      <h3>Abilities</h3>
      <ul className="feature-list" key="abilities-list">
      {pokemon?.abilities?.map((ability, idx) => {
        return (
          <>
            <li key={`${idx}-ability-name`}>{ability.ability.name}</li>
          </>
        )
      })}
      </ul>
    </>
  );
};

const pokemonType = (pokemon) => {
  return (
    <>
      <h3>Type</h3>
      <ul className="feature-list" key="types-list">
      {pokemon?.types?.map((type, idx) => {
        return (
          <>
            <li key={`${idx}-type-name`}>{type.type.name}</li>
          </>
        )
      })}
      </ul>
    </>
  );
};
