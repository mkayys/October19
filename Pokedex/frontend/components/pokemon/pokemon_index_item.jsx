import React from 'react';
import { Link } from "react-router-dom";


class PokemonIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to={`/pokemon/${this.props.pokemon.id}`}>{this.props.pokemon.name}</Link>
                <img src={this.props.pokemon.imageUrl} alt=""/>
            </div>
        )
    }
};

export default PokemonIndexItem;