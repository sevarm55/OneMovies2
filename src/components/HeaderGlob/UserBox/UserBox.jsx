import './UserBox.css'
const UserBox = ({ users, isOpenNavUser, setIsOpenNavUser }) => {
  return (
    <div className="userBox">
      <div
        className="imgBox"
        onClick={(e) => {
          e.stopPropagation()
          setIsOpenNavUser(!isOpenNavUser)
        }}
      >
        <img src={users.img} alt="" />
      </div>
      <h3>{users.userName}</h3>
    </div>
  )
}

export default UserBox
