import { FaPlay } from 'react-icons/fa6'

import { posterPath } from '../../api/apiConfig'

import s from './MoviesCard.module.css'
import { useEffect, useState } from 'react'

const MoviesCard = ({ movie, className }) => {
    const [circlePercentage, setCirclePercentage] = useState(0)

    useEffect(() => {
        const rating = movie.vote_average
        const maxRating = 10
        const circleFill = (rating / maxRating) * 100
        setCirclePercentage(circleFill)
    }, [movie.vote_average])

    return (
        <div
            className={` ${className} ${s.moviesCard} `}
            style={{
                backgroundImage: `url(${posterPath(movie.poster_path)})`,
            }}
        >
            <div className={s.shadow}>
                <div className={s.moviesCardContent}>
                    <div className={s.play}>
                        <FaPlay />
                    </div>
                    <div className={s.rating}>
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
                    </div>
                    <div className={s.releaseData}>
                        {movie.release_date?.slice(0, 4) ||
                            movie.first_air_date.slice(0, 4)}
                    </div>
                    <div className={s.moviesTitle}>
                        {movie.title || movie.name || movie.title_name}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviesCard
