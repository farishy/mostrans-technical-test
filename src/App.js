import "./App.css";
import NavigationBar from "./components/NavigationBar";
import CharList from "./components/CharList";
import Welcome from "./components/Welcome";
import CharDetails from "./components/CharDetails";
import React, { createContext } from "react";
import Location from "./components/Location";
import { Routes, Route, Link } from "react-router-dom";

export const CharContext = createContext([
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    species: "Human",
    location: {
      id: 3,
      name: "Citadel of Ricks",
    },
    created: "2017-11-04T18:48:46.250Z",
  },
  {
    id: 2,
    name: "Rick Sanchez",
    status: "Alive",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    species: "Human",
    location: {
      id: 3,
      name: "Citadel of Ricks",
    },
    created: "2017-11-04T18:48:46.250Z",
  },
]);

function App() {
  return (
    <div>
      <NavigationBar />
      {/* <Welcome /> */}
      <Routes>
        <Route path="/mostrans-technical-test/" element={<Welcome />} />
        <Route path="/mostrans-technical-test/characters" element={<CharList />} />
        <Route path="/mostrans-technical-test/character/details" element={<CharDetails />} />
        <Route path="/mostrans-technical-test/characters/location" element={<Location />} />
      </Routes>
      {/* <CharList />
      <CharDetails />
      <Location /> */}
    </div>
  );
}

export default App;
