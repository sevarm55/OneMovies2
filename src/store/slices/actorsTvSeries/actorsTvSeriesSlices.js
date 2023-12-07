export const initialActorsTvSeries = [];

export const actorsTvSeriesReducer = (
    state = initialActorsTvSeries,
    action
) => {
    switch (action.type) {
        case "fetchActorsTvSeries":
            return action.payload;
        default:
            return state;
    }
};

export const selectActorsTvSeries = (state) => state.actorsTvSeries;
