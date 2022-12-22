import React from 'react'
import { Container, PokeLogo } from './HeaderStyle'
import pokemonLogo from '../../assets/pokemonLogo.png'
import { HeaderButton } from './HeaderStyle'
import { useNavigate } from 'react-router-dom'
import { goToPokedexPage, goToHomePage } from '../../routes/coordinator'
import { useLocation } from 'react-router-dom'


 

export const Header = () => {

  const location = useLocation()

  const navigate = useNavigate()


  const renderizarHeader = () =>{
    switch (location.pathname){
      case "/":
        return (
          <>
          <HeaderButton onClick={() => goToPokedexPage(navigate)}>
            Pokedex
          </HeaderButton>
          </>
        )
        case "/pokedex":
          return(
            <>
            <button onClick={()=> goToHomePage(navigate)}>
              Ver Lista de Pokemon
            </button>
            <span>Pokedex</span>
            </>
          )

    }
  }

  return (
    <Container>
        <PokeLogo src={pokemonLogo}/>
{renderizarHeader()}        
        </Container>

    
  )
}

{/* <HeaderButton onClick={() => goToPokedexPage(navigate)} >Pokedex</HeaderButton> */}
