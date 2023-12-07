const apiKey = `&&api_key=82018daf2d3709d864cbaa4558efc3d5`
const page = `&page=1`

export const LOGINUSER_URL = 'http://localhost:8000/users'

export const getMoviesUrl = (page,id) => {
    return `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc${apiKey}&id=${id}`
}

export const getSeriesUrl = (id) => {
    return `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US${page}&sort_by=popularity.desc${apiKey}&id=${id}`
}

export const getGenriesUrl = (id) => {
    return `https://api.themoviedb.org/3/genre/movie/list?language=en&id=${id}${apiKey}`
}


export const getActorsUrl = (id) => {
    return `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US${apiKey}`;
};

export const getActorsUrlTV = (id) => {
    return `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US${apiKey}`;
};

export const getVideoUrl = (id) => {
    return `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US${apiKey}`;
}

export const getTvVideoUrl = (id) => {
    return `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US${apiKey}`
}