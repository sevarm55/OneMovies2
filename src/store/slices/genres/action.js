import { fetchGenres } from './genresDataApi'

export const actionGenres = () => {
    return async (dispatch) => {
        const result = await fetchGenres()
        dispatch({ type: 'genresFetch', payload: result.genres })
    }
}
