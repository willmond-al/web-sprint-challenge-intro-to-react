import React from 'react';
import Character from './Character';
import styled from 'styled-components';

const Characters = (props) => {

    const {data} = props
    

    return(
        
        <StyledCharacters>
           { 
           data.map((value, index)=>{
               
           return  <Character key={index} character={value}/>
           })}
        </StyledCharacters>
    )
    

}

const StyledCharacters = styled.div`
margin: 2% auto;
background-color:green;
width:85%;
padding: 2% 0;

`

export default Characters