import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => ({
    // piece of state that container subscribes to
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]
});

const mapDispatchToProps = dispatch => ({
    requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps))(PokemonDetail);