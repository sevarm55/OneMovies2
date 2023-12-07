import { NavLink, useNavigate } from 'react-router-dom'
import { TbArrowBackUp } from 'react-icons/tb'
import { toast } from 'react-toastify'

import sendRequest from '../../api/sendRequest'
import { LOGINUSER_URL } from '../../api/URL'

import 'react-toastify/dist/ReactToastify.css'
import './LoginPage.css'

const LoginPage = ({ setUsers }) => {
    const { getRequest } = sendRequest()
    const navigate = useNavigate()
    
        

    const loginSubmitHandle = (e) => {
        e.preventDefault()
        const { userName, password } = e.target
        const getUserdata = {
            userName: userName.value,
            password: password.value,
        }
        async function req() {
            const result = await getRequest(LOGINUSER_URL, getUserdata)
            const currentUser = result.find(
                (el) =>
                    (el.userName === userName.value ||
                        el.email === userName.value) &&
                    el.password === password.value
            )
            if (currentUser) {
                setUsers({
                    ...currentUser,
                })
                localStorage.setItem(
                    'user',
                    JSON.stringify({
                        ...currentUser,
                    })
                )
                navigate('/')
				toast.success('SIGN IN SUCCESS', {
					position: 'bottom-left',
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'light',
				})
            } else {
				toast.error('Incorrect email or password', {
					position: 'bottom-left',
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'light',
				})
			}
        }
        req()
    }

    return (
        <div>
            <div className="loginPage">
                <form className="form" onSubmit={loginSubmitHandle}>
                    <div className="back" onClick={() => navigate(-1)}>
                        <TbArrowBackUp />
                    </div>
                    <h2 className="loginLogo">
                        One<span>Movies</span>
                    </h2>
                    <input
                        name="userName"
                        type="text"
                        placeholder="USERNAME OR EMAIL"
                        autoComplete="off"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="PASSWORD"
                        autoComplete="off"
                    />
                    <button className="loginBtn buttons">SIGN IN</button>
                    <NavLink to="/registerpage" className="registerBtn buttons">
                        SIGN UP
                    </NavLink>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
