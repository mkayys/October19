import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';

import {selectAllPokemon} from './reducers/selectors';

import { Provider } from 'react-redux';

const Root = ({ store }) => (
    <Provider store={store}>
        <div>Hello, world!</div>
    </Provider>
);

export default Root;

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');


    window.fetchAllPokemon = fetchAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;
    window.requestAllPokemon = requestAllPokemon;
    window.selectAllPokemon = selectAllPokemon;
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;


    ReactDOM.render(<Root store={store} />, rootEl);
});