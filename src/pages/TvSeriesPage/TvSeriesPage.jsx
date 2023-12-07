import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { selectSeries } from '../../store/slices/series/seriesSlices'
import { actionFetchSeries } from '../../store/slices/series/action'
import SliderDots from '../../components/SliderDots/SliderDots'
import SliderTV from '../../components/SliderTV/SliderTV'
import LoadingPage from '../LoadingPage/LoadingPage'

import s from './TvSeriesPage.module.css'
import MoviesCard from '../../components/MoviesCard/MoviesCard'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

const TvSeriesPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    const { pathname } = useLocation()
    const dispatch = useDispatch()
    const series = useSelector(selectSeries)

    useEffect(() => {
        setTimeout(() => {
            dispatch(actionFetchSeries())
            setIsLoading(false)
            window.scrollTo(0, 0)
        }, 900)
    }, [dispatch, pathname])

    if (isLoading) {
        return <LoadingPage />
    }

    return (
        <div className={s.tvSeriesPage}>
            <div className={s.slider}>
                {series.map((serie) => (
                    <SliderTV
                        key={serie.id}
                        serie={serie}
                        currentIndex={currentIndex}
                        setCurrentIndex={setCurrentIndex}
                    />
                ))}
                <div className={s.dotsCont}>
                    {series.map((el, index) => (
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
                    {series.map((movie) => (
                        <Link to={`/series/${movie.id}`} key={movie.id}>
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

export default TvSeriesPage
