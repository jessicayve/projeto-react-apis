import styled from "styled-components";



export const CardPokemon = styled.div`

width: 440px;
height: 220px;
border-radius: 12px;
padding: 20px;
margin-right: 20px;


`


export const PokemonNumber = styled.div`
font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  color: #FFFFFF;


`

export const PokemonName = styled.div`


font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 39px;
color: #FFFFFF;
  

`
export const PokemonType = styled.img`
 
`

export const TypesContainer = styled.div`
display: flex;
flex-direction: row;
margin-top: 10px;
gap: 2px;


`
export const ImageContainer = styled.div`


display: flex;
justify-content: center;
position: relative;
align-items: center;
width: 200px;
height: 200px;



.pokeImage{
  /* width: 216px;
height: 216px; */
z-index: 1;
max-width: 200px;
margin-bottom: 510px;
margin-left: 446px;


}
.pokebola{
  position: absolute;
  margin-bottom: 450px;
  margin-left: 442px;

 


}


`

export const Buttons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 40px;
border: none;




`
export const DetailsButton = styled.div`
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
  
  cursor: pointer;

`;
 export const DeleteButton = styled.button`
 
 padding: 8px 32px;
 background: #FF6262;
  border-radius: 6px;
 
  cursor: pointer;
  color: #FFFFFF;
  
 font-size: 16px;
 `
