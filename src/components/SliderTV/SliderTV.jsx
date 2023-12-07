import imdIcon from '../../utils/svg/image3.svg'
import { RiArrowLeftDoubleLine, RiArrowRightDoubleFill } from 'react-icons/ri'
import { backdropPath } from '../../api/apiConfig'

import s from './SliderTV.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectSeries } from '../../store/slices/series/seriesSlices'

const SliderTV = ({ serie, currentIndex, setCurrentIndex }) => {
    const series = useSelector(selectSeries)

    const nextHnadler = () => {
        if (currentIndex === series.length - 1) {
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

    return (
        <div
            className={s.slider}
            style={{
                backgroundImage: `url(${backdropPath(
                    serie?.backdrop_path || serie?.poster_path
                )})`,
                transform: `translateX(-${currentIndex * 100}%)`,
            }}
        >
            <div className={s.shadow}>
                <div className={s.titleBox}>
                    <h2>{serie?.name || serie?.original_name}</h2>
                </div>
                <div className={s.ratingBox}>
                    <img src={imdIcon} alt="" />-<p>{serie?.vote_average}</p>
                </div>
                <div className={s.infoFilmBox}>
                    <p>{serie?.overview}</p>
                </div>
                <div className={s.slideButtonsBox}>
                    <Link to={`/series/${serie?.id}`} className={s.watchbtn}>
                        WATCH
                    </Link>
                </div>
                <div className={s.arrowsBtn}>
                    <button onClick={prevHandler}>
                        <RiArrowLeftDoubleLine />
                    </button>
                    <button onClick={nextHnadler}>
                        <RiArrowRightDoubleFill />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SliderTV
