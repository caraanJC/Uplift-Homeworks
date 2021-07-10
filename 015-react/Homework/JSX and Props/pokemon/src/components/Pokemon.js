import React from 'react';
import './Pokemon.css';

export class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <tr>
        <td className='pokemonName'>
          <p>{pokemon.name}</p>
        </td>
        <td className='pokemonImage'>
          <p>
            <img src={pokemon.image} alt={pokemon.name} />
          </p>
        </td>
        <td className='pokemonType'>
          <p className={pokemon.type}>{pokemon.type}</p>
        </td>
      </tr>
    );
  }
}

export default Pokemon;
