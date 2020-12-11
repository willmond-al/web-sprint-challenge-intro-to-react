import React from 'react';
import Character from './Character';
import styled from 'styled-components';

const Characters = (props) => {

    const {data} = props

    return(

        <div className='character-container'>
            {/* {data.map(character=>{
                return(
                    <Character key={data.id} data={data}/>
                )
            })} */}
            <Character key={data.id} data={data}/>
        </div>

    )

}

export default Characters