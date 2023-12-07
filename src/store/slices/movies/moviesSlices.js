export const initialMovies = []

export const moviesReducer = (state = initialMovies, action) => {
  switch (action.type) {
    case 'fetchMovies':
      return action.payload
    default:
      return state
  }
}

export const selectMovies = (state) => state.movies