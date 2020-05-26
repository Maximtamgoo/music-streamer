import React from 'react'
import style from './style/AccountDropdown.module.css'
import { MdPerson } from 'react-icons/md'

const AccountDropdown = () => {
  return (
    <button className={style['icon-btn']}>
      <MdPerson className={style.icon} />
    </button>
  )
}

export default AccountDropdown