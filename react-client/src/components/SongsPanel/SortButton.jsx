import React from 'react'
// import { useDispatch } from 'react-redux'
// import { sortByTitle, sortByUploadDate } from '../../redux/sortByActions'
import style from './style/SortBy.module.css'
import { MdKeyboardArrowUp } from 'react-icons/md'

const SortButton = ({ name }) => {

  return (
    <button className={style["icon-btn"]}>
      {name}<MdKeyboardArrowUp className={style.icon} />
    </button>
  )
}

export default SortButton