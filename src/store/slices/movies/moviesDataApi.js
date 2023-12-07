import { getMoviesUrl } from '../../../api/URL'
import sendRequest from '../../../api/sendRequest'
const { getRequest } = sendRequest()

export const fetchMovies = async (page) => {
    const MOVIES_URL = getMoviesUrl(page)
    const result = await getRequest(MOVIES_URL)
    return result
}
