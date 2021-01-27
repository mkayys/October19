import React from 'react';

class PokemonDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }

    render() {
        if(this.props.pokemon === undefined) return null;
        return (
            <div>
                {this.props.pokemon.name}
            </div>
        )
    }
};

export default PokemonDetail;