import React from "react";
import { Tab } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import EpisodeList from "./EpisodeList";
import WelcomePage from "./WelcomePage";

const panes = [
    { menuItem: 'Home', render: () => <WelcomePage /> },
    { menuItem: 'Characters', render: () => <CharacterList /> },
    { menuItem: 'Locations', render: () => <LocationsList /> },
    { menuItem: 'Episodes', render: () => <EpisodeList /> },
  ]
  
  const TabNav = () => <Tab panes={panes} />
  
  export default TabNav;


