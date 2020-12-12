import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Character = (props) => {
  const { character } = props;

  return (
    <StyledCharacter>
      <div className="hover">
        <h2>{character.name}</h2>
        <img src={character.image} alt={`${character.name}`} />
        <Button characterDetails={character} />
      </div>
    </StyledCharacter>
  );
};

const StyledCharacter = styled.div`
  width: 30%;
  display: inline-block;

  h2 {
    padding-top: 1%;
  }

  img {
    border-radius: 20%;
    width: 60%;
  }

  .hover:hover {
    color: darksalmon;
    img {
      border: dashed red 2px;
    }
  }
`;

export default Character;
