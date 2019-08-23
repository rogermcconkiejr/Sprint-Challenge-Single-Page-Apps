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

const EpisodeCard = props => {
    return (
     
        <Box>
          
            <TitleAttys>Episode Name: {props.name}</TitleAttys>
            <BoxAttys>Episode Number: {props.episode}</BoxAttys>
            <BoxAttys>Air Date: {props.air_date}</BoxAttys>
          
        </Box>
     
    );
  };
  
  export default EpisodeCard;