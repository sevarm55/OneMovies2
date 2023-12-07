import { useSelector } from 'react-redux'
import { selectFavorit } from '../../store/slices/favorit/favoritSlices'
import { posterPath } from '../../api/apiConfig'

import s from './MyFavoritePage.module.css'

const MyFavoritePage = ({ users }) => {
    const favorit = useSelector(selectFavorit)

    if (users && users.email) {
        return (
            <div className={s.myFavoritePage}>
                {favorit.map((movie) => (
                    <div
                        className={s.moviesCard}
                        style={{
                            backgroundImage: `url(${posterPath(
                                movie.poster_path
                            )})`,
                        }}
                        key={movie.id}
                    ></div>
                ))}
            </div>
        )
    } else {
        return <div className={s.regist}>Register To see your Favories</div>
    }
}

export default MyFavoritePage
