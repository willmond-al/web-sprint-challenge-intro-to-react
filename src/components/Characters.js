import React from 'react';
import Character from './Character';
import styled from 'styled-components';

const Characters = (props) => {

    const {data} = props
    

    return(
        
        <div className='character-container'>
           { 
           data.map((value, index)=>{
               
           return  <Character key={index} character={value}/>
           })}
        </div>
    )
    

}

export default Characters