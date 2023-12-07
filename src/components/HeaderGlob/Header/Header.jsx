import { useEffect, useState } from 'react'
import BurgerBox from '../BurgerBox/BurgerBox'
import BurgerNav from '../BurgerNav/BurgerNav'
import HeadLoginBox from '../HeadLoginBox/HeadLoginBox'
import HeadLogoBox from '../HeadLogoBox/HeadLogoBox'
import HeadNavBox from '../HeadNavBox/HeadNavBox'
import s from './Header.module.css'
import UserBox from '../UserBox/UserBox'
import UserBoxNav from '../UserBoxNav/UserBoxNav'

const Header = ({ users, setUsers }) => {
    const [isOpenNav, setIsOpenNav] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isOpenNavUser, setIsOpenNavUser] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 50) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    return (
        <div className={`${s.header} ${scrolled ? s.scrolled : ''}`}>
            {users.email ? (
                <>
                    <BurgerNav
                        isOpenNav={isOpenNav}
                        setIsOpenNav={setIsOpenNav}
                        users={users}
                    />
                    <BurgerBox
                        isOpenNav={isOpenNav}
                        setIsOpenNav={setIsOpenNav}
                    />
                    <HeadLogoBox />
                    <HeadNavBox />
                    <UserBox
                        users={users}
                        isOpenNavUser={isOpenNavUser}
                        setIsOpenNavUser={setIsOpenNavUser}
                    />
                    <UserBoxNav
                        isOpenNavUser={isOpenNavUser}
                        setIsOpenNavUser={setIsOpenNavUser}
                        setUsers={setUsers}
                    />
                </>
            ) : (
                <>
                    <BurgerNav
                        isOpenNav={isOpenNav}
                        setIsOpenNav={setIsOpenNav}
                    />
                    <BurgerBox
                        isOpenNav={isOpenNav}
                        setIsOpenNav={setIsOpenNav}
                    />
                    <HeadLogoBox />
                    <HeadNavBox />
                    <HeadLoginBox />
                </>
            )}
        </div>
    )
}

export default Header
