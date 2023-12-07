import { Link } from 'react-router-dom'
import s from './HeadLogoBox.module.css'
const HeadLogoBox = () => {
    return (
        <div className={s.headLogoBox}>
            <Link to={"/"} style={{
				color:"white",
				textDecoration: "none"
			}}>
                <h1>
                    One<span>Movies</span>
                </h1>
            </Link>
        </div>
    )
}

export default HeadLogoBox
