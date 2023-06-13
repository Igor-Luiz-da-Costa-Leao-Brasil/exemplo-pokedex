import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [pokemons, setPokemons] = useState([])
  const [numero, setNumero] = useState(1)


  const getPokemonInfo = async () => {
    if (numero < 50) {

    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${numero}`)
    const pokemon = {
      imagem: resp.data.sprites.front_default,
      nome: resp.data.name,
      height: resp.data.height,
    }
    setNumero((prevState) => prevState + 1)
    setPokemons((prevState) => [...prevState, pokemon])
  } 
  }


  useEffect(() => {
    getPokemonInfo()
  }, [])

  const render = () => {
    return pokemons.map((pokemon) => (
      <div className='card'>
        <h1>{pokemon.nome}</h1>
        <img src={pokemon.imagem}/>
        <p>{pokemon.height}</p>
      </div>
      ) 
    )
  }


  if (pokemons.length <= 0) {
    return (
      <h1>adsajnbdjka</h1>
    )
  }
  
  return (
    <div className='container'>
      {render()}
    </div>
  )


}

export default App
