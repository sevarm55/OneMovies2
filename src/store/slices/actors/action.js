import { fetchActors } from "./actorsDataApi";

export const actionActors = (id) => {
    return async (dispatch) => {
        const result = await fetchActors(id);
        dispatch({ type: "fetchActors", payload: result.cast });
    };
};
