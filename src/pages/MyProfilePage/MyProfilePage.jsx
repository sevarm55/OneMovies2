import s from './MyProfilePage.module.css'
const MyProfilePage = ({ users }) => {
    if (users && users.email) {
        return (
            <div className={s.myProfilePage}>
                <div className={s.usersCard}>
                    <div className={s.imgBox}>
                        <img src={users.img} alt="" />
                    </div>
                    <div className={s.userContent}>
                        <h2>
                            Email: <span> {users.email}</span>
                        </h2>
                        <h2>
                            Username: <span>{users.userName}</span>
                        </h2>
                        <h2>
                            Phone: <span> {users.phone}</span>
                        </h2>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={s.reg}>
                <h1>Register to view my profile</h1>
            </div>
        )
    }
}

export default MyProfilePage
