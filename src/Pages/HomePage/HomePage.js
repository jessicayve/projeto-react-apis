import { Header } from '../../Components/Header/Header'
import { ContainerCard } from './HomePageStyle'
import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import { useEffect, useState } from 'react'
import { PokemonCard } from '../../Components/PokemonCard/PokemonCard'
import { TypesContainer } from '../../Components/PokemonCard/PokemonCardStyle'




export const HomePage = () => {
    
    const [pokemons, setPokemons] = useState([])
    const [type, setType] = useState([])

    
    

    const fetchPokemons = async () =>{
        let endpoints = []
        for ( let i = 1; i<19; i++){
            endpoints.push(`${BASE_URL}/${i} `)
        }
        axios.all(endpoints.map((endpoint)=> axios.get(endpoint))).then((res)=> 
        setPokemons(res))
   
    }
    useEffect(()=>{
        fetchPokemons()
    }, [])
    

console.log(pokemons)
    




  return (
    <>
    <Header/>
    <ContainerCard>
        {pokemons.map((pokemon, index)=>{
            return <PokemonCard pokemon={pokemon} type={type} key={index}/>
            
        })}

       <TypesContainer/>


    </ContainerCard>
    </>
   
  )
}
