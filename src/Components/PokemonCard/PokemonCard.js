import React from 'react'
import { CardPokemon, ImageContainer, PokemonName, PokemonNumber, TypesContainer } from './PokemonCardStyle'
import pokebola from '../../assets/pokebola.png'
import { getTypes } from '../../utils/ReturnPokemonType'
import { ImageType } from './PokemonCardStyle'

export const PokemonCard = (props) => {
  return (


    <>
    <CardPokemon>
      <div>
        <PokemonNumber> #{props.pokemon.data.id}</PokemonNumber>
      <PokemonName>{props.pokemon.data.name.charAt(0).toUpperCase() + props.pokemon.data.name.slice(1)}</PokemonName>

      <TypesContainer>
       <ImageType src={getTypes(props.pokemon.data.types[0].type.name)}></ImageType>
            <ImageType src={getTypes(props.pokemon.data.types[1]?.type.name)}></ImageType>
      </TypesContainer>

      </div>
        
        <ImageContainer>
        <img className='pokeImage'
        src={props.pokemon.data.sprites?.other["official-artwork"].front_default} alt="pokemons"/>
                <img className='pokebola'
                src={pokebola}/>

        </ImageContainer>
              
                
                </CardPokemon>
                </>
  )
}



