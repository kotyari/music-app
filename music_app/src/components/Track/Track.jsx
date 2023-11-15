import style from './track.module.scss'
import { IconButton } from '@mui/material'
import { PlayArrow } from '@mui/icons-material'
import secondsToMMSS from '../../../utils/secondsToMMSS'

const Track = (track) => {
  const { src, id, preview, title, artists, duration } = track

  return (
    <div className={style.track}>
      <IconButton>
        <PlayArrow />
      </IconButton>
      <img className={style.preview} src={preview} aklt=""></img>
      <div className={style.credits}>
        <b>{title}</b>
        <p>{artists}</p>
      </div>
      <p>{secondsToMMSS(duration)}</p>
    </div>
  )
}

export default Track
