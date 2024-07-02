import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../index.css'

// use data from that to look up films and details about planet (homeworld)
const Characters = (props) => {

    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
        try {
          // make call to characters api
          const response = await fetch(import.meta.env.VITE_CHARACTERS_API_URL);
          if (!response.ok) {
            throw new Error("Data could not be fetched!");
          }
          const json_response = await response.json();
          setCharacters(json_response);
        } catch (error) {
            console.error("Error fetching characters:", error);
        }
        };

        fetchData();
    }, []);

const handleCharacterClick = (id) => {
    navigate(`/${id}`);
};

  return (
    <div id="charactersList">
      {characters.map((character) => (
        <div key={character.id} onClick={() => handleCharacterClick(character.id)}>
          <h2>{character.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Characters;


    
