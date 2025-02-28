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

const CharacterCard = props => {
    return (
     
        <Box>
          
            <TitleAttys>Character Name: {props.name}</TitleAttys>
            <img src={props.image} alt="A character in Rick and Morty" /> 
            <BoxAttys>Gender: {props.gender}</BoxAttys>
            <BoxAttys>Species: {props.species}</BoxAttys>
            <BoxAttys>Status: {props.status}</BoxAttys>
          
        </Box>
     
    );
  };
  
  export default CharacterCard;