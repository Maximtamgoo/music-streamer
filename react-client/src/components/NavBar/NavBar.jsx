import React from 'react'
import style from './style/NavBar.module.css'

const NavBar = ({ children }) => {
  return (
    <div className={style["nav-bar"]}>
      <div className={style.nav}>
        {children}
      </div>
    </div>
  )
}

export default NavBar