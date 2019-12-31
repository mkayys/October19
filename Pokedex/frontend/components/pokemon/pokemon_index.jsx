import React from 'react';

class PokemonIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render() {
        const pokemon = this.props.pokemon.map((poke, i) => {
            return (
                <ul key={i}>
                    <li>{poke.name}</li>
                    <img src={poke.imageUrl} alt=""/>
                </ul>
            )
        })

        return (
            <div>
                {pokemon}
            </div>
        )
    }
}

export default PokemonIndex;