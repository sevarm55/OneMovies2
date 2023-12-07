import { FaRegHeart, FaPlay } from 'react-icons/fa'
import { backdropPath } from '../../api/apiConfig'
import { posterPath } from '../../api/apiConfig'

import s from './MoviesDetailPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectMovies } from '../../store/slices/movies/moviesSlices'
import { selectGenres } from '../../store/slices/genres/genresSlices'
import { useLocation, useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { actionFetchMovies } from '../../store/slices/movies/action'
import { actionGenres } from '../../store/slices/genres/action'
import imdIcon from '../../utils/svg/image3.svg'
import { selectActors } from '../../store/slices/actors/actorsSlices'
import LoadingPage from '../LoadingPage/LoadingPage'
import { actionActors } from '../../store/slices/actors/action'
import { selectVideo } from '../../store/slices/video/videoSlices'
import { actionFetchVideo } from '../../store/slices/video/action'
import { addToFavorites } from '../../store/slices/favorit/action'

const MoviesDetailPage = () => {
    const { id } = useParams()
    const { pathname } = useLocation()

    const [isLoading, setIsLoading] = useState(true)
    const movies = useSelector(selectMovies)
    const genres = useSelector(selectGenres)
    const actors = useSelector(selectActors)
    const videos = useSelector(selectVideo)
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(actionFetchMovies())
            dispatch(actionGenres())
            dispatch(actionFetchVideo(id))
            dispatch(actionActors(id))
            setIsLoading(false)
        }, 700)
    }, [dispatch, id])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    const getGenres = (genreId, allGenres) => {
        return genreId.map((id) => {
            const foundGenre = allGenres.find((genre) => genre.id === id)
            return foundGenre ? foundGenre.name : ''
        })
    }

    const moviesDetail = movies.find((moviesEl) => String(moviesEl.id) === id)

    const allgenres =
        moviesDetail && moviesDetail.genre_ids
            ? getGenres(moviesDetail.genre_ids, genres)
            : []

    const handleLikeClick = () => {
        dispatch(addToFavorites(moviesDetail))
    }


    if (isLoading) {
        return <LoadingPage />
    }

    return (
        <div className={s.moviesDetailPage}>
            <div
                className={s.bg}
                style={{
                    backgroundImage: `url(${
                        moviesDetail?.backdrop_path || moviesDetail?.poster_path
                            ? backdropPath(
                                  moviesDetail?.backdrop_path ||
                                      moviesDetail?.poster_path
                              )
                            : ''
                    })`,
                }}
            ></div>
            <div className={s.contentBox}>
                <div className={s.left}>
                    <img
                        src={`${posterPath(
                            moviesDetail?.poster_path ||
                                moviesDetail?.backdrop_path
                        )}`}
                        alt=""
                    />
                </div>
                <div className={s.right}>
                    <h2>
                        {moviesDetail?.title || moviesDetail?.original_title}{' '}
                        {moviesDetail?.release_date.slice(0, 4)}
                    </h2>
                    <div className={s.rating}>
                        <img src={imdIcon} alt="imdIcon" />
                        <p>{moviesDetail?.vote_average}</p>
                        <p>Genres : {allgenres.join(`,  `)}</p>
                    </div>
                    <p>{moviesDetail?.overview}</p>
                    <div className={s.buttons}>
                        <button className={s.like} onClick={handleLikeClick}>
                            <FaRegHeart />
                        </button>
                        <button className={s.play}>
                            <FaPlay />
                            watch now
                        </button>
                    </div>
                    <div className={s.actors}>
                        <div className={s.actorstitle}>
                            <p>Movies cast</p>
                        </div>
                        <div className={s.actorsContent}>
                            {actors.map((actor) => {
                                return (
                                    <div
                                        key={actor.id}
                                        className={s.actorsCard}
                                        style={{
                                            backgroundImage: actor.profile_path
                                                ? `url(${posterPath(
                                                      actor.profile_path
                                                  )})`
                                                : `url('https://via.placeholder.com/150')`,
                                        }}
                                    >
                                        <p>
                                            {actor.name || actor.original_name}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.trailer}>
                <div className={s.trilerTitle}>TRILER</div>
                {videos && videos.results && videos.results.length > 0 ? (
                    <iframe
                        title="Trailer"
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${videos.results[0].key || videos.results[1].key}`}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <p>No trailer available</p>
                )}
            </div>
        </div>
    )
}

export default MoviesDetailPage
