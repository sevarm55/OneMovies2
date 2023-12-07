import { NavLink } from 'react-router-dom'
import './HeadNavBox.css'
const HeadNavBox = () => {
  return (
    <div className="headNavBox">
      <NavLink to={"/"}>home</NavLink>
      <NavLink to={"/moviespage"}>movies</NavLink>
      <NavLink to={"/tvseriespage"}>tv Series</NavLink>
      {/* <NavLink to={"/searchpage"}>Search</NavLink> */}
    </div>
  )
}

export default HeadNavBox
