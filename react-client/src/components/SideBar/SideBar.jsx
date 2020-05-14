import React, { useReducer } from 'react'
import './style/SideBar.css'
import UploadsDropdown from '../UploadsDropdown/UploadsDropdown'
import countReducer from '../../state/countReducer'
import { increment, decrement, reset } from '../../state/countActions'

const SideBar = () => {
  // const dispatch = useDispatch()
  // const count = useSelector(state => state.count)

  const [state, dispatch] = useReducer(countReducer, {count: 0})

  return (
    <div className="side-bar">
      SideBar
      <div>count: {state.count}</div>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <UploadsDropdown />
    </div>
  )
}

export default SideBar