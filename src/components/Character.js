import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Character = (props) =>{
    const { character } = props

    return(

        <StyledCharacter>
            <h2>{character.name}</h2>
            <img src={character.image} alt={`${character.name}`} />
            <Button characterDetails={character}/>
            
        </StyledCharacter>

    )
}

const StyledCharacter = styled.div`

    h2{
        padding-top:1%;
    }

    img{
        border-radius: 20%;
    }

`

export default Character;