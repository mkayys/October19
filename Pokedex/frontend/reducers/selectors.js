export const selectAllPokemon = (state) => {
    let arr = Object.values(state);
    return arr;
};
