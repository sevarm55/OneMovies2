import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { TbArrowBackUp } from 'react-icons/tb'
import { ImUpload } from 'react-icons/im'
import { toast } from 'react-toastify'

import sendRequest from '../../api/sendRequest'
import { LOGINUSER_URL } from '../../api/URL'

import './RegisterPage.css'
import 'react-toastify/dist/ReactToastify.css'

const RegisterPage = ({ setUsers }) => {

    const [img, setImg] = useState('')
    const navigate = useNavigate()
    const { postRequest } = sendRequest()

    const notify = () =>
    toast.success('SIGN UP SUCCESS', {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
	
    const createImg = (e) => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setImg(reader.result)
        }
    }

    const registerSubmitHandle = (e) => {
        e.preventDefault()
        const { email, userName, password, phone } = e.target

        const addUserData = {
            email: email.value,
            userName: userName.value,
            password: password.value,
            phone: phone.value,
            img: img,
        }

        async function req() {
            const result = await postRequest(LOGINUSER_URL, addUserData)
            localStorage.setItem(
                'user',
                JSON.stringify({
                    ...result,
                })
            )
            setUsers({
                ...result,
            })
            navigate(`/`)
            notify()
        }
        req()
    }

    return (
        <div>
            <div className="registerPage">
                <div className="loginPage">
                    <form className="form" onSubmit={registerSubmitHandle}>
                        <div className="back" onClick={() => navigate(-2)}>
                            <TbArrowBackUp />
                        </div>
                        <h2 className="loginLogo">
                            One<span>Movies</span>
                        </h2>
                        <input name="email" type="text" placeholder="EMAIL" />
                        <input
                            name="userName"
                            type="text"
                            placeholder="USERNAME"
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="PASSWORD"
                        />
                        <input name="phone" type="text" placeholder="PHONE" />
                        <label htmlFor="fileInput" className="uploadBtn">
                            <ImUpload />
                            upload avatar
                        </label>
                        <input
                            onChange={createImg}
                            id="fileInput"
                            name="file"
                            type="file"
                            className="fileInput"
                        />
                        <button className="registerBtn buttons">SIGN UP</button>
                        <NavLink to="/loginpage" className="loginBtn buttons">
                            SIGN IN
                        </NavLink>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
