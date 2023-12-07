import { Link } from "react-router-dom";
import s from "./FooterNavBox.module.css";
const FooterNavBox = () => {
    return (
        <div className={s.navBox}>
            <Link to="/">home</Link>
            <Link to="moviesPage">movies</Link>
            <Link to="tvSeriesPage">tv Series</Link>
            <Link to="search">search</Link>
        </div>
    );
};

export default FooterNavBox;
