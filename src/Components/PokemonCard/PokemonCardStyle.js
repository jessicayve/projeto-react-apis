import styled from "styled-components";



export const CardPokemon = styled.div`

width: 400px;
height: 210px;
border-radius: 12px;
padding: 20px;
margin-right: 20px;


`


export const PokemonNumber = styled.p`
font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  color: #FFFFFF;


`

export const PokemonName = styled.h1`


font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 39px;
color: #FFFFFF;
  

`
export const PokemonType = styled.img`
 
`

export const TypesContainer = styled.div`


`
export const ImageContainer = styled.div`

margin-top: -284px;
margin-left: 220px;
display: flex;
justify-content: center;
position: relative;
align-items: center;
width: 180px;
height: 200px;



.pokeImage{
  /* width: 216px;
height: 216px; */
z-index: 1;
max-width: 200px;


}
.pokebola{
  position: absolute;
right: -22px;
top: 32px;
}


`
export const ImagePokebola = styled.div`
width: 100px;
margin-top: -500px;
margin-left: 100px;


`
export const Buttons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 8px;




`
export const DetailsButton = styled.p`
font-weight: 600;
font-size: 18px;
text-decoration-line: underline;
color: #FFFFFF;
cursor: pointer;
`

export const CatchButton = styled.button`
 
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
 padding: 8px 32px;
  background: #FFFFFF;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;
 export const DeleteButton = styled.button`
 
 padding: 8px 32px;
 background: #FF6262;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  color: #FFFFFF;
  
 font-size: 16px;
 `