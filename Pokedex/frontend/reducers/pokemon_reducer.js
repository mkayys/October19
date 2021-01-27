import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = {};
    // debugger
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            return action.pokemon
        case RECEIVE_SINGLE_POKEMON:
            return Object.assign(nextState, state, { [action.payload.pokemon.id]: action.payload.pokemon} )
        default:
            return state;
    }
};

export default pokemonReducer;