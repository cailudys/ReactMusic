import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Slider } from 'antd'
import { Link } from 'react-router-dom'

import {
  PlayerBarWrapper,
  BarControl,
  BarPlayerInfo,
  BarOperator
} from './style'

import { useAppDispatch, useAppSelector } from '@/store'
import { getImageSize } from '@/utils/format'
import { getSongPlayUrl } from '@/utils/handle-player'

interface Iprops {
  children?: ReactNode
}

const AppPlayerBar: FC<Iprops> = () => {
  /** 组件内部定义的数据 */
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  /** 从redux中获取数据 */
  const { currentSong } = useAppSelector((state) => ({
    currentSong: state.player.currentSong
  }))

  // const dispatch = useAppDispatch()

  /** 组件内的副作用操作 */
  useEffect(() => {
    // 1.播放音乐
    audioRef.current!.src = getSongPlayUrl(33894312)
    audioRef.current
      ?.play()
      .then(() => {
        setIsPlaying(true)
        console.log('歌曲播放成功')
      })
      .catch((err) => {
        setIsPlaying(false)
        console.log('歌曲播放失败:', err)
      })

    // // 2.获取音乐的总时长
    // setDuration(currentSong.dt)
  }, [currentSong])

  /** 组件内部的事件处理 */
  function handlePlayBtnClick() {
    console.log('33333333333', isPlaying)
    // 1.控制播放器的播放/暂停
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false))

    // 2.改变isPlaying的状态
    setIsPlaying(!isPlaying)
  }

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlaying={isPlaying}>
          <button
            className="btn sprite_playbar prev"
            onClick={() => null}
          ></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayBtnClick}
          ></button>
          <button
            className="btn sprite_playbar next"
            onClick={() => null}
          ></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img
              className="image"
              src={getImageSize(currentSong?.al?.picUrl, 50)}
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong?.name}</span>
              <span className="singer-name">{currentSong?.ar[0].name}</span>
            </div>
            <div className="progress">
              <Slider
                // step={0.5}
                value={progress}
                // tooltip={{ formatter: null }}
                // onChange={handleSliderChanging}
                // onAfterChange={handleSliderChanged}
              />
              <div className="time">
                <span className="current">00:52</span>
                <span className="divider">/</span>
                <span className="duration">04:35</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button
              className="btn sprite_playbar loop"
              // onClick={handleChangePlayMode}
            ></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio
        ref={audioRef}
        // onTimeUpdate={handleTimeUpdate}
        // onEnded={handleTimeEnded}
      />
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
