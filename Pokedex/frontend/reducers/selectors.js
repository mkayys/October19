export const selectAllPokemon = (state) => {
    let arr = Object.values(state.entities.pokemon);
    return arr;
};
