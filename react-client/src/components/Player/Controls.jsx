import React, { useState } from 'react'
import './style/Controls.css'
import { MdPlayArrow, MdPause, MdSkipNext, MdSkipPrevious } from 'react-icons/md'

const Controls = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="controls-container">
      <div className="controls">
        <button className="icon-btn"><MdSkipPrevious className="icon" /></button>
        <button className="icon-btn" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? <MdPause className="icon" /> : <MdPlayArrow className="icon" />}
        </button>
        <button className="icon-btn"><MdSkipNext className="icon" /></button>
      </div>

      <div className="progress">
        <div className="current-time">0:00</div>
        <div className="progress-bar"></div>
        <div className="end-time">1:45</div>
      </div>
    </div>
  )
}

export default Controls