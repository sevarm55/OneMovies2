import { Link } from 'react-router-dom'
import s from './HeadLoginBox.module.css'
const HeadLoginBox = () => {
  return (
    <div className={s.headLoginBox}>
      <Link to={"/loginpage"}>Sign in</Link>
    </div>
  )
}

export default HeadLoginBox
