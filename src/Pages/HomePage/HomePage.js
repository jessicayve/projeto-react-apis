import {Header} from '../../Components/Header/Header';
import { ContainerCard, PokemonContainer } from './HomePageStyle';
import React, { useContext } from 'react';
import { PokemonCard } from '../../Components/PokemonCard/PokemonCard';
import { GlobalContext } from '../../GlobalContext/GlobalContext';




export const HomePage = () => {

  const context = useContext(GlobalContext)
  const { pokelist, addPokedex, pokedex } = context

  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.id === pokemonInPokedex.id
        )
    );

  return (
    <>
      <Header />
      <ContainerCard>
        <h1 >Todos Pokemóns</h1>
        <PokemonContainer>

          {filteredPokelist().map((pokemon) => {
            return <PokemonCard pokemonUrl={pokemon.url} addPokedex={addPokedex} key={pokemon.url} />

          })}

        </PokemonContainer>
      </ContainerCard>
    </>

  )
}
