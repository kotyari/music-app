import { createContext, useState } from 'react'
import tracksList from '../assets/tracksList'
export const AudioContext = createContext({})

const audio = new Audio(tracksList[0].src)

const AudioProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(tracksList[0])
  const [isPlaying, setIsPlaying] = useState(false)

  const handleToggleAudio = (track) => {
    if (currentTrack.id !== track.id) {
      setCurrentTrack(track)
      setIsPlaying(true)
      audio.src = track.src
      audio.currentTime = 0
      audio.play()
      return
    }

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const value = { audio, currentTrack, isPlaying, handleToggleAudio }

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
}

export default AudioProvider
