import styled from "styled-components";

export const CardPokemon = styled.div`
background-color: #729F92;
border: 1px solid green;
padding: 32px;
width: 340px;
height: 160px;
border-radius: 4%;
margin-top: 10px;
margin-bottom: 46px;
color: white;

`

export const ImageContainer = styled.div`
margin-left: 250px;
margin-top: -188px;
width: 194px;
height: 194px;
display: flex;
align-items: center;
justify-content: center;
position: relative;

.pokeImage{
    width: 220px;
    margin-bottom: -14px;
    margin-right: 160px;
    z-index: 1;
}
.pokebola{
    position: absolute;
    top: 48px;
    right: 100px;
}

`

export const PokemonNumber = styled.p`
font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-align: left;


`


export const PokemonName = styled.h1`
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 100px;

`

export const TypesContainer = styled.div`
margin-bottom: 52px;


`

export const ImageType = styled.div`
width: 40px;

`

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;


`