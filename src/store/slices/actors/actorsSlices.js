export const initialActors = []

export const actorsReducer = (state = initialActors,action) => {
    switch (action.type) {
        case "fetchActors" :
            return action.payload
        default :
            return state
    }
}

export const selectActors = (state) => state.actors