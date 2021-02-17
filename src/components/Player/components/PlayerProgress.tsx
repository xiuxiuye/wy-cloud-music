import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../../store/provider'
import util from '../../../libs/util'

interface PlayerBtnsProps {
  audioDOM: any;
  setNextPlay: Function;
}

const initPlayTime = {
  increaseTime: '00 : 00',
  declineTime: '00 : 00'
}

export default function PlayerProgress ({ audioDOM, setNextPlay }: PlayerBtnsProps) {
  const [playTime, setPlayTime] = useState(initPlayTime)
  const [progress, setProgress] = useState(0)
  const [validXAxisRange, setValidXAxisRange] = useState({ min: 0, max: 0 })
  const store = useContext(StoreContext) as any
  const trackStyles = { backgroundColor: store.state.skin.current ? '' : 'rgba(0, 0, 0, 0.65)' }
  const barStyles = { backgroundColor: store.state.skin.current ? store.state.skin.colors.subColor : store.state.skin.colors.balanceColor, width: `${progress}%` }
  const ballStyles = { left: `${progress}%` }
  const pointerStyles = { backgroundColor: store.state.skin.current ? store.state.skin.colors.subColor : store.state.skin.colors.balanceColor }
  const playing = store.state.play.playing

  if (playing) {
    !audioDOM.current.ended && audioDOM.current.paused && audioDOM.current.play()
    startPlayingInterVal(store, audioDOM, setPlayTime, setProgress, setNextPlay)
  } else {
    clearPlayingINterval()
  }

  useEffect(() => {
    setPlayTime({
      increaseTime: util.changeTimeFormat(store.state.play.current.progress),
      declineTime: util.changeTimeFormat(store.state.play.current.duration - store.state.play.current.progress),
    })
    setProgress(store.state.play.current.progress / store.state.play.current.duration * 100)
    initXAxisRange(setValidXAxisRange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.state.play.current])

  return (
    <div className="wyy-player-progress">
      <div className="wyy-player-progress-time">{playTime.increaseTime}</div>
      <div className="wyy-player-progress-track" id="wyy-player-progress-track" style={trackStyles} onClick={(e) => setPlayProgress(e, validXAxisRange, setPlayTime, setProgress, store, audioDOM)}>
        <div className="wyy-player-progress-bar" style={barStyles}></div>
        <div className="wyy-player-progress-ball" style={ballStyles} onMouseDown={(e) => handleProgressMouseDown(e, validXAxisRange, setPlayTime, setProgress, store, audioDOM)}>
          <div className="wyy-player-progress-ball-pointer" style={pointerStyles}></div>
        </div>
      </div>
      <div className="wyy-player-progress-time">{playTime.declineTime}</div>
    </div>
  )
}

let interval: any = null
let progressDragging = false

function startPlayingInterVal (store: any, audioDOM: any, setPlayTime: Function, setProgress: Function, setNextPlay: Function) {
  if (interval === null) {
    if (store.state.play.current.progress !== audioDOM.current.currentTime) {
      audioDOM.current.currentTime = store.state.play.current.progress
    }
    interval = setInterval(() => {
      if (!progressDragging) {
        store.state.play.current.progress = Math.round(audioDOM.current.currentTime)
        store.dispatch({
          type: 'play/setCurrent',
          value: store.state.play.current
        })
        setPlayTime({
          increaseTime: util.changeTimeFormat(store.state.play.current.progress),
          declineTime: util.changeTimeFormat(store.state.play.current.duration - store.state.play.current.progress)
        })
        setProgress(store.state.play.current.progress / store.state.play.current.duration * 100)
        if (audioDOM.current.ended) {
          setNextPlay('next')
        }
      }
    }, 1000)
  }
}

function clearPlayingINterval () {
  if (interval) {
    clearInterval(interval)
    interval = null
  }
}

function initXAxisRange (setValidXAxisRange: Function) {
  const dom = document.querySelector('#wyy-player-progress-track')
  if (dom) {
    const min = Math.round((dom as any).getBoundingClientRect().left)
    const max = Math.round((dom as any).getBoundingClientRect().left + (dom as any).clientWidth - 14)
    setValidXAxisRange({ min,max })
  }
}

function setPlayProgress (event: any, validXAxisRange: any, setPlayTime: Function, setProgress: Function, store: any, audioDOM: any) {
  const current = event.clientX
  const min = validXAxisRange.min
  const max = validXAxisRange.max
  if (current >= min && current <= max) {
    const progress = (current - min) / (max - min)
    audioDOM.current.currentTime = progress * store.state.play.current.duration
    setPlayTime({
      increaseTime: util.changeTimeFormat(Math.round(progress * store.state.play.current.duration)),
      declineTime: util.changeTimeFormat(store.state.play.current.duration - Math.round(progress * store.state.play.current.duration))
    })
    setProgress(progress * 100)
  }
}

function handleProgressMouseDown (event: any, validXAxisRange: any, setPlayTime: Function, setProgress: Function, store: any, audioDOM: any) {
  let progress = 0
  function handleProgressMouseMove (event: any,) {
    const current = event.clientX
    const min = validXAxisRange.min
    const max = validXAxisRange.max
    if (current <= min) {
      progress = 0
    } else if (current >= max) {
      progress = 1
    } else {
      progress = (current - min) / (max - min)
    }
    setPlayTime({
      increaseTime: util.changeTimeFormat(Math.round(progress * store.state.play.current.duration)),
      declineTime: util.changeTimeFormat(store.state.play.current.duration - Math.round(progress * store.state.play.current.duration))
    })
    setProgress(progress * 100)
  }

  function handleProgressMouseUp () {
    progressDragging = false
    audioDOM.current.currentTime = progress * store.state.play.current.duration
    window.removeEventListener('mousemove', handleProgressMouseMove)
    window.removeEventListener('mouseup', handleProgressMouseUp)
  }

  progressDragging = true
  window.addEventListener('mousemove', handleProgressMouseMove)
  window.addEventListener('mouseup', handleProgressMouseUp)
}
