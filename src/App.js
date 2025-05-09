import './App.css';
import { useState, useEffect } from 'react';
import Input from './components/input/input-components.jsx';
import Lists from './components/lists/lists-component.jsx';
function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(res => res.json())
      .then(json => {
        json.results.map((result, index) => {
          result.id = index + 1;
        });
        setPokemons(json.results);
        setFilteredPokemons(json.results);
      });
  }, []);
  const onChangeHandler = event => {
    const comparedPokemons = pokemons.filter(pokemon => {
      return pokemon.name.includes(event.target.value);
    });
    setFilteredPokemons(comparedPokemons);
  };
  return (
    <div>
      <h1>宝可梦</h1>
      <Input onChangeHandler={onChangeHandler}/>
      <Lists pokemonsLists={filteredPokemons} />
    </div>
  );
}

export default App;
