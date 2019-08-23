import React from "react";
import styled from "styled-components";

const Box = styled.div`
border:1px solid black;
margin-top:20px;
background-color:whitesmoke;
padding:3px;
width: 33%;
`;

const TitleAttys = styled.div`
border-bottom:1px solid black;
font-family: 'Anton', sans-serif;
margin-bottom:5px;
`;
const BoxAttys = styled.div`
font-family: 'Anton', sans-serif;
color:grey;
`;

const LocationCard = props => {
    return (
     
        <Box>
          
            <TitleAttys>Location: {props.name}</TitleAttys>     
            <BoxAttys>Dimension: {props.dimension}</BoxAttys>
            <BoxAttys>Type: {props.type}</BoxAttys>

          
        </Box>
     
    );
  };
  
  export default LocationCard;
