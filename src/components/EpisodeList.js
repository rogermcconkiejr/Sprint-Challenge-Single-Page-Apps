import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";
import FlexContainer from 'react-styled-flexbox';


function EpisodeList() {
    const [character, setCharacter] = useState([]);
    useEffect(() => {
      axios
        .get("https://rickandmortyapi.com/api/episode", {
          params: {}
        })
        .then(response => {
          const character = response.data.results;
          console.log("Episode:", character);
          setCharacter(character);
        });
    }, []);
    return (
        <FlexContainer wrapWrap = {true} justifySpaceAround = {true}>
    {character.map(character => {
              return (
                
                <EpisodeCard
                  key = {character.created}
                  name= {character.name}
                  episode= {character.episode}
                  air_date= {character.air_date}
                />
              );
            })}
            
        </FlexContainer>
    )
  }
  
  export default EpisodeList;