import React, { useState } from 'react'

//! CSS Troubles

import { MdPlayArrow, MdPause, MdSkipNext, MdSkipPrevious } from 'react-icons/md'

// import IconButton from '@material-ui/core/IconButton'
// import PlayArrowRounded from '@material-ui/icons/PlayArrowRounded'
// import PauseRounded from '@material-ui/icons/PauseRounded'
// import SkipNextRounded from '@material-ui/icons/SkipNextRounded'
// import SkipPreviousRounded from '@material-ui/icons/SkipPreviousRounded'

const Controls = () => {
  // const [isPlaying, setIsPlaying] = useState(false)

  return (
    // <div className="controls-container">
    //   <IconButton size="small">
    //     <SkipPreviousRounded fontSize="large" />
    //   </IconButton>
    //   <IconButton size="small" onClick={() => setIsPlaying(!isPlaying)}>
    //     {
    //       isPlaying ? <PauseRounded fontSize="large" /> : <PlayArrowRounded fontSize="large" />
    //     }
    //   </IconButton>
    //   <IconButton size="small">
    //     <SkipNextRounded fontSize="large" />
    //   </IconButton>

    <div>
      <button className="icon-btn">
        <MdPlayArrow />
      </button>
      <MdSkipPrevious />
      <MdPlayArrow />
      <MdPause />
      <MdSkipNext />
    </div>

    // </div>
  )
}

export default Controls