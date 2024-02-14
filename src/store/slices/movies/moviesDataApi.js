import { getMoviesUrl } from '../../../api/URL'
import sendRequest from '../../../api/sendRequest'
const { getRequest } = sendRequest()

export const fetchMovies = async (page,id) => {
    const MOVIES_URL = getMoviesUrl(page, id)
    const result = await getRequest(MOVIES_URL)
    return result
}
