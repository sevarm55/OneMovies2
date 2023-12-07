import { fetchMovies } from './moviesDataApi'

export const actionFetchMovies = (page) => {
  return async (dispatch) => {
    const result = await fetchMovies(page)
    dispatch({ type: 'fetchMovies', payload: result.results })
  }
}