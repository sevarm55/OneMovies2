import { getActorsUrl } from "../../../api/URL";
import sendRequest from "../../../api/sendRequest";

const {getRequest} = sendRequest()

export const fetchActors = async (id) => {
    const actorsUrl = getActorsUrl(id)
    const result = await getRequest(actorsUrl)
    return result
}