import React from 'react';
import styled from 'styled-components';

const Character = (props) =>{
    const { data } = props

    return(

        <div>
            {data.name}
            <img src={data.image} />
            <button>See Details</button>
        </div>

    )
}

export default Character;