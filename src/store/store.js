import { applyMiddleware, combineReducers, createStore } from 'redux'
import { initialMovies, moviesReducer } from './slices/movies/moviesSlices'
import { initialSeries, seriesReducer } from './slices/series/seriesSlices'
import { genresReducer, initialGenres } from './slices/genres/genresSlices'
import { actorsReducer, initialActors } from './slices/actors/actorsSlices'
import {
    actorsTvSeriesReducer,
    initialActorsTvSeries,
} from './slices/actorsTvSeries/actorsTvSeriesSlices'
import { initialVideo, videoReducer } from './slices/video/videoSlices'
import thunk from 'redux-thunk'
import { TvVideoReducer, initialTvVideo } from './slices/tvVideo/tvVideoSlices'
import { favoritReducer, initialFavorit } from './slices/favorit/favoritSlices'

export const store = createStore(
    combineReducers({
        movies: moviesReducer,
        series: seriesReducer,
        genres: genresReducer,
        actors: actorsReducer,
        actorsTvSeries: actorsTvSeriesReducer,
        video: videoReducer,
        tvVideo: TvVideoReducer,
        favorit:favoritReducer

    }),
    {
        movies: initialMovies,
        series: initialSeries,
        genres: initialGenres,
        actors: initialActors,
        actorsTvSeries: initialActorsTvSeries,
        video: initialVideo,
        tvVideo: initialTvVideo,
        favorit:initialFavorit
    },
    applyMiddleware(thunk)
)
