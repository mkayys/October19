export const fetchAllPokemon = () => {
    return $.ajax({
        url: `/api/pokemon`,
        method: 'get'
    })
}

export const fetchSinglePokemon = (id) => {
    return $.ajax({
        url: `/api/pokemon/${id}`,
        method: 'get'
    })
}