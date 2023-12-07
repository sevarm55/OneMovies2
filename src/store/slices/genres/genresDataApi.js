import sendRequest from '../../../api/sendRequest'
import { getGenriesUrl } from '../../../api/URL'
const { getRequest } = sendRequest()

export const fetchGenres = async (id) => {
    const GENRES_URL = getGenriesUrl(id)
    const result = await getRequest(GENRES_URL)
    return result
}
