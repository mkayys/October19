import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon } from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    window.fetchAllPokemon = fetchAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;

    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});