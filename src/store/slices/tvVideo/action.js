import { fetchTvVideo } from './tvVideoDataApi'

export const actionFetchTvVideo = (id) => {
    return async (dispatch) => {
        const result = await fetchTvVideo(id)
        dispatch({ type: 'fetchTvVideo', payload: result })
    }
}
