import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import FlexContainer from 'react-styled-flexbox';

function CharacterList() {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character", {
        params: {}
      })
      .then(response => {
        const character = response.data.results;
        console.log("Character:", character);
        setCharacter(character);
      });
  }, []);

  return (
    <FlexContainer wrapWrap = {true} justifySpaceAround = {true}>
{character.map(character => {
          return (
            
            <CharacterCard
              key = {character.created}
              name= {character.name}
              image = {character.image}
              gender = {character.gender}
              species = {character.species}
              status = {character.status}

            />
          );
        })}
        
    </FlexContainer>
)
}
export default CharacterList;