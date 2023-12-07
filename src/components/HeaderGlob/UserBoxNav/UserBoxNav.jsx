import { Link, NavLink } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdFavoriteBorder } from 'react-icons/md'
import { MdOutlineRateReview } from 'react-icons/md'
import { TbLogout } from 'react-icons/tb'
import './UserBoxNav.css'

const UserBoxNav = ({ isOpenNavUser, setIsOpenNavUser, setUsers }) => {
  const clickdocumentToCloseMenu = () => {
    setIsOpenNavUser(false)
  }
  document.addEventListener('click', clickdocumentToCloseMenu)

  const logOut = () => {
    localStorage.removeItem('user')
    setUsers({
      email: '',
    })
  }

  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
      }}
      className={`userBoxNav ${
        isOpenNavUser ? 'userBoxNavOpen' : 'userBoxNav'
      }`}
    >
      <NavLink onClick={() => setIsOpenNavUser(false)} to={'/myprofilepage'}>
        <FaRegUserCircle />
        My Profile
      </NavLink>
      <NavLink onClick={() => setIsOpenNavUser(false)} to={'/favoritepage'}>
        <MdFavoriteBorder />
        Favorites
      </NavLink>
      <NavLink onClick={() => setIsOpenNavUser(false)} to={'/reviewspage'}>
        <MdOutlineRateReview />
        Reviews
      </NavLink>
      <Link onClick={logOut} to={'/'}>
        <TbLogout />
        Logout
      </Link>
    </div>
  )
}

export default UserBoxNav
