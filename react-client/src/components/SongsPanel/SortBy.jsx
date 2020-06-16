import React from 'react'
import style from './style/SortBy.module.css'
import SortButton from './SortButton'

// function sortDirectionList() {
//   class Node {
//     constructor(value) {
//       this.value = value
//       this.next = null
//     }
//   }
//   const list = new Node('default')
//   const asc = list.next = new Node('asc')
//   const dec = asc.next = new Node('dec')
//   dec.next = list

//   let currentNode = dec

//   return {
//     nextSortDirection: () => {
//       currentNode = currentNode.next
//       return currentNode.value
//     }
//   }
// }

const SortBy = () => {

  return (
    <div className={style.sort}>
      <SortButton name={'Title'} />
      
      {/* <button className={style["icon-btn"]}>
        Artist<MdKeyboardArrowUp className={style.icon} />
      </button>
      <button className={style["icon-btn"]}>
        Album<MdKeyboardArrowUp className={style.icon} />
      </button>
      <button className={style["icon-btn"]} onClick={() => dispatch(sortByUploadDate())}>
        Date Added<MdKeyboardArrowUp className={style.icon} />
      </button>
      <button className={style["icon-btn"]}>
        Duration
      </button> */}
    </div>
  )
}

export default SortBy