import React, {useState} from "react";
import styled from "styled-components";

const Button = (props) => {
  const { characterDetails } = props;

  const [showDetails, setShowDetails] = useState(false);

  const toggleShowDetails = () => { 
    setShowDetails(showDetails !== true)
  }


  return (
    <>
      <div>
        <button onClick={toggleShowDetails}>{showDetails ? 'Hide Details' : 'See Details'}</button>
      </div>
      {showDetails ? 
      <>
      <div>Origin: {characterDetails.origin.name}</div>
      <div>Species: {characterDetails.species}</div>
      <div>Location: {characterDetails.location.name}</div>
      <div>Status: {characterDetails.status}</div> 
      </>
      : <div></div>
      }
    </>
  );
};

export default Button;
