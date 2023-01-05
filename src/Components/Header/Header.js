import React from 'react'
import { Container, PokeLogo } from './HeaderStyle'
import pokemonLogo from '../../assets/pokemonLogo.png'
import { HeaderButton, GotoHomePageButton} from './HeaderStyle'
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
            <GotoHomePageButton onClick={()=> goToHomePage(navigate)}>
             Todos Pokémons
            </GotoHomePageButton>
           
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


