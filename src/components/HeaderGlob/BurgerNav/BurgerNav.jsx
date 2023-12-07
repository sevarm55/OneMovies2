import { NavLink } from 'react-router-dom'
import { IoHomeOutline } from 'react-icons/io5'
import { CgPlayButtonR } from 'react-icons/cg'
import { LuMonitorPlay } from 'react-icons/lu'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdFavoriteBorder } from 'react-icons/md'
import { MdOutlineRateReview } from 'react-icons/md'
import { HiSearch } from 'react-icons/hi'

import './BurgerNav.css'

const BurgerNav = ({ isOpenNav, setIsOpenNav, users }) => {
    document.onclick = () => {
        setIsOpenNav(false)
    }
    return (
        <div
            onClick={(e) => {
                e.stopPropagation()
            }}
            className={`burgerNav ${isOpenNav ? 'burgerNavOpen' : 'burgerNav'}`}
        >
            <div className="menuLogoBox">
                <h1>
                    One<span style={{ color: 'red' }}>Movies</span>
                </h1>
            </div>
            <div className="menuTitle">
                <h2>Menu</h2>
            </div>
            <div className="menuInfo">
                <nav className="navLink">
                    <NavLink
                        onClick={() => setIsOpenNav(false)}
                        to="/"
                        className="navLinkItem"
                    >
                        <div className="iconWrapper">
                            <IoHomeOutline />
                        </div>
                        <span>home</span>
                    </NavLink>
                    <NavLink
                        onClick={() => setIsOpenNav(false)}
                        to="moviesPage"
                        className="navLinkItem"
                    >
                        <div className="iconWrapper">
                            <CgPlayButtonR />
                        </div>
                        <span>movies</span>
                    </NavLink>
                    <NavLink
                        onClick={() => setIsOpenNav(false)}
                        to="tvSeriesPage"
                        className="navLinkItem"
                    >
                        <div className="iconWrapper">
                            <LuMonitorPlay />
                        </div>
                        <span>tv Series</span>
                    </NavLink>
                    <NavLink
                        onClick={() => setIsOpenNav(false)}
                        to="search"
                        className="navLinkItem"
                    >
                        <div className="iconWrapper">
                            <HiSearch />
                        </div>
                        <span>search</span>
                    </NavLink>
                </nav>
            </div>
            {users?.email && (
                <>
                    <div className="menuTitle">
                        <h2>PERSONAL</h2>
                    </div>
                    <div className="menuInfo">
                        <nav className="navLink">
                            <NavLink
                                onClick={() => setIsOpenNav(false)}
                                to="/myprofilepage"
                                className="navLinkItem"
                            >
                                <div className="iconWrapper">
                                    <FaRegUserCircle />
                                </div>
                                <span>My Profile</span>
                            </NavLink>
                            <NavLink
                                onClick={() => setIsOpenNav(false)}
                                to="/favoritepage"
                                className="navLinkItem"
                            >
                                <div className="iconWrapper">
                                    <MdFavoriteBorder />
                                </div>
                                <span>Favorites</span>
                            </NavLink>
                            <NavLink
                                onClick={() => setIsOpenNav(false)}
                                to="/reviewspage"
                                className="navLinkItem"
                            >
                                <div className="iconWrapper">
                                    <MdOutlineRateReview />
                                </div>
                                <span>Reviews</span>
                            </NavLink>
                        </nav>
                    </div>
                </>
            )}
        </div>
    )
}

export default BurgerNav
