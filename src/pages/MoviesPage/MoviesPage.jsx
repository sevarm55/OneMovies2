import { useDispatch, useSelector } from 'react-redux'
import s from './MoviesPage.module.css'
import { selectMovies } from '../../store/slices/movies/moviesSlices'
import { useEffect, useState } from 'react'
import { actionFetchMovies } from '../../store/slices/movies/action'
import Slider from '../../components/Slider/Slider'
import SliderDots from '../../components/SliderDots/SliderDots'
import LoadingPage from '../LoadingPage/LoadingPage'
import MoviesCard from '../../components/MoviesCard/MoviesCard'
import { actionGenres } from '../../store/slices/genres/action'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

const MoviesPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const [isLoading, setIsLoading] = useState(true)
    const { pathname } = useLocation()

    const dispatch = useDispatch()
    const movies = useSelector(selectMovies)


    useEffect(() => {
        setTimeout(() => {
            dispatch(actionFetchMovies())
            dispatch(actionGenres())
            setIsLoading(false)
        }, 900)
    }, [dispatch])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    if (isLoading) {
        return <LoadingPage />
    }
    

    return (
        <div className={s.moviesPage}>
            <div className={s.slider}>
                {movies.map((movie) => (
                    <Slider
                        key={movie.id}
                        movie={movie}
                        currentIndex={currentIndex}
                        setCurrentIndex={setCurrentIndex}
                    />
                ))}
                <div className={s.dotsCont}>
                    {movies.map((el, index) => (
                        <SliderDots
                            key={index}
                            index={index}
                            currentIndex={currentIndex}
                            setCurrentIndex={setCurrentIndex}
                        />
                    ))}
                </div>
            </div>

            <div className={s.moviesPagel}>
                <div className={s.moviesPanel_title}>
                    <h2>MOVIES</h2>
                </div>
                <div className={s.moviesContent}>
                    {movies.map((movie) => (
                        <Link to={`/movies/${movie.id}`} key={movie.id}>
                            <MoviesCard
                                className={s.customMoviesCard}
                                movie={movie}
                            />
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default MoviesPage
