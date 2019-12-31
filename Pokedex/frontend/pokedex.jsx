import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import { Provider } from 'react-redux';
import PokemonIndexContainer from './components/pokemon/pokemon_index_container';

import { HashRouter, Route } from "react-router-dom";
const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <div>Pokedex</div>
            <Route path="/" component={PokemonIndexContainer} />
        </HashRouter>
    </Provider>
);

export default Root;

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');

   
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store} />, rootEl);
});