import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Characters from './components/Characters';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [data, setData] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

   
  
  
  useEffect(() => {

    axios
.get('https://rickandmortyapi.com/api/character')
.then(res => {
const characterInfo = res.data.results[0]
  setData(characterInfo)
})
.catch(err=>{
  console.log('err')
})

  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div>
      <Characters key={data.id } data={data}/>

      </div>
    </div>
  );
}

export default App;
