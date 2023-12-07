import { RiArrowLeftDoubleLine, RiArrowRightDoubleFill } from 'react-icons/ri'
import { backdropPath } from '../../api/apiConfig'

import s from './Slider.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectMovies } from '../../store/slices/movies/moviesSlices'
import { useEffect, useState } from 'react'
import { selectGenres } from '../../store/slices/genres/genresSlices'

const Slider = ({ movie, setCurrentIndex, currentIndex }) => {
    const [circlePercentage, setCirclePercentage] = useState(0)
    const movies = useSelector(selectMovies)
    const genres = useSelector(selectGenres)

    useEffect(() => {
        const rating = movie.vote_average
        const maxRating = 10
        const circleFill = (rating / maxRating) * 100
        setCirclePercentage(circleFill)
    }, [movie.vote_average])

    const nextHnadler = () => {
        if (currentIndex === movies.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const prevHandler = () => {
        if (currentIndex !== 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const getGenres = (genreId, allGenres) => {
        return genreId.map((id) => {
            const foundGenre = allGenres.find((genre) => genre.id === id)
            return foundGenre ? foundGenre.name : ''
        })
    }

    const foundGenres = movies.find((moviesEl) => moviesEl.id === movie.id)

    const allgenres =
        foundGenres && foundGenres.genre_ids
            ? getGenres(foundGenres.genre_ids, genres)
            : []

    

    return (
        <div
            className={s.slider}
            style={{
                backgroundImage: `url(${backdropPath(
                    movie.backdrop_path || movie.poster_path
                )})`,
                transform: `translateX(-${currentIndex * 100}%)`,
            }}
        >
            <div className={s.shadow}>
                <div className={s.titleBox}>
                    <h2>{movie.title || movie.original_name}</h2>
                </div>
                <div className={s.ratingBox}>
                    <div className={s.circleBorder}>
                        <div
                            className={s.circle}
                            style={{
                                background: `conic-gradient(#ff0000 ${circlePercentage}%, transparent 0)`,
                            }}
                        >
                            <p>{movie.vote_average}</p>
                        </div>
                    </div>
                    <div className={s.sevo}>
                        <h4>{allgenres.join(` -  `)}</h4>
                    </div>
                </div>
                <div className={s.infoFilmBox}>
                    <p>{movie.overview}</p>
                </div>
                <div className={s.slideButtonsBox}>
                    <Link to={`/movies/${movie.id}`} className={s.watchbtn}>
                        WATCH
                    </Link>
                </div>
                <div className={s.arrowsBtn}>
                    <button onClick={() => prevHandler()}>
                        <RiArrowLeftDoubleLine />
                    </button>
                    <button onClick={() => nextHnadler()}>
                        <RiArrowRightDoubleFill />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Slider
