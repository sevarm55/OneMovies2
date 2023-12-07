import { Route, Routes } from 'react-router'
import Layout from '../pages/Layout/Layout'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import { useEffect, useState } from 'react'
import HomePage from '../pages/HomePage/HomePage'
import MoviesPage from '../pages/MoviesPage/MoviesPage'
import TvSeriesPage from '../pages/TvSeriesPage/TvSeriesPage'
import SearchPage from '../pages/SearchPage/SearchPage'
import MyFavoritePage from '../pages/MyFavoritePage/MyFavoritePage'
import MyProfilePage from '../pages/MyProfilePage/MyProfilePage'
import MyReviewsPage from '../pages/MyReviewsPage/MyReviewsPage'
import MoviesDetailPage from '../pages/MoviesDetailPage/MoviesDetailPage'
import TvSerIesDetailPages from '../pages/TvSerIesDetailPages/TvSerIesDetailPages'

const AppRouter = () => {
    const [users, setUsers] = useState({
        email: '',
    })

    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUsers(JSON.parse(localStorage.getItem('user')))
        }
    }, [])

    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={<Layout users={users} setUsers={setUsers} />}
                >
                    <Route index element={<HomePage users={users} />} />
                    <Route path="/moviespage" element={<MoviesPage />} />
                    <Route path="/movies/:id" element={<MoviesDetailPage />} />
                    <Route path="/tvseriespage" element={<TvSeriesPage />} />
                    <Route
                        path="/series/:id"
                        element={<TvSerIesDetailPages />}
                    />
                    <Route path="/searchpage" element={<SearchPage />} />
                    <Route path="/myprofilepage" element={<MyProfilePage users={users} />} />
                    <Route path="/favoritepage" element={<MyFavoritePage users={users} />} />
                    <Route path="/reviewspage" element={<MyReviewsPage />} />
                </Route>
                <Route
                    path="/registerpage"
                    element={<RegisterPage setUsers={setUsers} />}
                />
                <Route
                    path="/loginpage"
                    element={<LoginPage setUsers={setUsers} />}
                />
            </Routes>
        </div>
    )
}

export default AppRouter
