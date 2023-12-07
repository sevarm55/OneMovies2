import s from './BurgerBox.module.css'

const BurgerBox = ({ isOpenNav, setIsOpenNav }) => {
  return (
    <div className={s.burgerBox}>
      <div
        className={s.burgerBorder}
        onClick={(e) => {
          e.stopPropagation()
          setIsOpenNav(!isOpenNav)
        }}
      >
        <span className={`${s.line} ${s.line1}`}></span>
        <span className={`${s.line} ${s.line2}`}></span>
        <span className={`${s.line} ${s.line3}`}></span>
      </div>
    </div>
  )
}

export default BurgerBox
