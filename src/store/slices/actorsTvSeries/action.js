import { fetchActorsTvSeries } from "./actorsTvSeriesDataApi";

export const actionActorsTvSeries = (id) => {
    return async (dispatch) => {
        const result = await fetchActorsTvSeries(id);
        dispatch({ type: "fetchActorsTvSeries", payload: result.cast });
    };
};
