import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';

import {selectAllPokemon} from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    window.fetchAllPokemon = fetchAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;
    window.requestAllPokemon = requestAllPokemon;
    window.selectAllPokemon = selectAllPokemon;
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});