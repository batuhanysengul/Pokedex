import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const PokeList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=900`)
      .then((response) => {
        setPokemon(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredPokemon = pokemon.filter((poke) => {
    return poke.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="poke-list">
      <input
        type="text"
        placeholder="Search for Pokemon"
        onChange={handleSearch}
      />
      <ul>
        {filteredPokemon.map((poke, index) => (
          <li key={index}>
            <img className="poke-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.indexOf(poke) + 1}.png`}
              alt="" />
            <h2 className="poke-names">{poke.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokeList;
