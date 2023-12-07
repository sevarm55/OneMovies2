export const initialGenres = []

export const genresReducer = (state = initialGenres, action) => {
    switch (action.type) {
        case 'genresFetch':
            return action.payload
        default:
            return state
    }
}

export const selectGenres = (state) => state.genres