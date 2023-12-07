import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { selectMovies } from '../../store/slices/movies/moviesSlices'
import { actionFetchMovies } from '../../store/slices/movies/action'
import Slider from '../../components/Slider/Slider'

import './HomePage.css'
import SliderDots from '../../components/SliderDots/SliderDots'
import LoadingPage from '../LoadingPage/LoadingPage'
import MoviesCard from '../../components/MoviesCard/MoviesCard'
import { selectSeries } from '../../store/slices/series/seriesSlices'
import { actionFetchSeries } from '../../store/slices/series/action'
import { actionGenres } from '../../store/slices/genres/action'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    const { pathname } = useLocation()
    const disptach = useDispatch()
    const movies = useSelector(selectMovies)
    const series = useSelector(selectSeries)

    useEffect(() => {
        setTimeout(() => {
            disptach(actionFetchMovies())
            disptach(actionFetchSeries())
            disptach(actionGenres())
            setIsLoading(false)
            window.scrollTo(0, 0)
        }, 900)
    }, [disptach, pathname])

    if (isLoading) {
        return <LoadingPage />
    }


    return (
        <div className="homePage">
            <div className="slider">
                {movies.map((movie) => (
                    <Slider
                        key={movie.id}
                        movie={movie}
                        currentIndex={currentIndex}
                        setCurrentIndex={setCurrentIndex}
                    />
                ))}
                <div className="dotsCont">
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

            <div className="popularMovies">
                <div className="popularMovies_title">
                    <h2>POPULAR MOVIES</h2>
                </div>
                <div className="popularContent">
                    {movies.map((movie) => (
                        <Link to={`/movies/${movie.id}`} key={movie.id}>
                            <MoviesCard movie={movie} />
                        </Link>
                    ))}
                </div>
            </div>

            <div className="popularMovies serials">
                <div className="popularMovies_title">
                    <h2>POPULAR SERIES</h2>
                </div>
                <div className="popularContent">
                    {series.map((movie) => (
                        <Link to={`/series/${movie.id}`} key={movie.id}>
                            <MoviesCard  movie={movie} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage
