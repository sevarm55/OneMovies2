export const initialFavorit = []

export const favoritReducer = (state = initialFavorit, action) => {
    switch (action.type) {
        case 'addToFavorites':
            return [
                ...state, action.payload
            ]
        default:
            return state
    }
}

export const selectFavorit = (state) => state.favorit
