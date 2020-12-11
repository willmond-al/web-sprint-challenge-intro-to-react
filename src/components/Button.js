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
      <StyledButton>
     <button onClick={toggleShowDetails}>{showDetails ? 'Hide Details' : 'See Details'}</button>
      {showDetails ? 
      <>
      <div className="stat">Origin: {characterDetails.origin.name}</div>
      <div className="stat">Species: {characterDetails.species}</div>
      <div className="stat">Location: {characterDetails.location.name}</div>
      <div className="stat">Status: {characterDetails.status}</div> 
      </>
      : <div></div>
      }
      </StyledButton>
    </>
  );
};

const StyledButton = styled.div`

.stat{
    color:white;
    text-emphasis:bold;
    padding-top:3%;
    font-size: 0.8em;
}
`

export default Button;

