import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import FlexContainer from 'react-styled-flexbox';


function LocationsList() {
    const [character, setCharacter] = useState([]);
    useEffect(() => {
      axios
        .get("https://rickandmortyapi.com/api/location", {
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
                
                <LocationCard
                  key = {character.created}
                  name= {character.name}
                  dimension={character.dimension}
                  type= {character.type}

                />
              );
            })}
            
        </FlexContainer>
    )
  }
  
  export default LocationsList;