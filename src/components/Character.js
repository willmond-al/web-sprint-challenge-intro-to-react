import React from 'react';
import styled from 'styled-components';

const Character = (props) =>{
    const { character } = props

    return(

        <StyledCharacter>
            <h2>{character.name}</h2>
            <img src={character.image} />
            
            <button>See Details</button>
            
        </StyledCharacter>

    )
}

const StyledCharacter = styled.div`

`

export default Character;