import './App.css';
import Pokemon from './components/Pokemon';

function App() {
  let pokemons = [
    {
      id: '#001',
      name: 'Bulbasaur',
      type: 'Grass',
      image:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    },
    {
      id: '#004',
      name: 'Charmander',
      type: 'Fire',
      image:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
    },
    {
      id: '#007',
      name: 'Squirtle',
      type: 'Water',
      image:
        'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
    },
  ];

  return (
    <div className='App'>
      <table>
        <thead>
          <tr>
            <th className='name'>Name</th>
            <th className='image'>Image</th>
            <th className='type'>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon) => (
            <Pokemon pokemon={pokemon} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
