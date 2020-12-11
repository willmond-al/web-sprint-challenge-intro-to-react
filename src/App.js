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
setData(res.data.results)
  
})
.catch(err=>{
  console.log('err')
})

  }, [])


  return (
    <div className="App">
      <h1 className="Header">Rick And Morty Characters</h1>
      <div>
      <Characters data={data}/>

      </div>
    </div>
  );
}

export default App;
