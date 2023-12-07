import { fetchVideo } from './videoDataApi'

export const actionFetchVideo = (id) => {
    return async (dispatch) => {
        const result = await fetchVideo(id)
        dispatch({ type: 'fetchVideo', payload: result })
    }
}
