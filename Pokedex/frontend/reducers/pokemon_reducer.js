import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = {};

    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            // debugger
            // Object.keys(action.pokemon).map(pokeId => {
            //     let old = state[pokeId] === undefined ? {} : state[pokeId]
            //     nextState[pokeId] = Object.assign(old, action.pokemon[pokeId])
            // })

            // nextState = merge({}, state, action.pokemon);
            // return nextState;

            return Object.assign(state, nextState, action.pokemon.pokemon)
        default:
            return state;
    }
};

export default pokemonReducer;