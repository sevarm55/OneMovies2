import { getActorsUrlTV } from "../../../api/URL";
import sendRequest from "../../../api/sendRequest";

const { getRequest } = sendRequest();

export const fetchActorsTvSeries = async (id) => {
    const actorsTvSeriesUlr = getActorsUrlTV(id);
    const result = await getRequest(actorsTvSeriesUlr);
    return result;
};
