import { useState, useEffect } from 'react';
import './App.css';
import CharacterCard from './components/CharacterCard'

function App() {
  //let personajes = null
  const [ personajes, setPersonajes ] = useState( null )

  const url = "https://rickandmortyapi.com/api/character"

  async function fetchData(){
    let data = await  fetch( url )
                      .then( response => response.json() )
                      .then( data => data )

    setPersonajes( data?.results )
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="character-container">
      {
        personajes?.map( (personaje, index) => {
          return (
            <CharacterCard 
            key={`personaje-${index}`} 
            personajeData={ personaje }
            ></CharacterCard>
          )
        })  
      }
    </div>
  );
}

export default App;
