import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Slider } from 'antd'
import { Link } from 'react-router-dom'

import {
  PlayerBarWrapper,
  BarControl,
  BarPlayerInfo,
  BarOperator
} from './style'

interface Iprops {
  children?: ReactNode
}

const AppPlayerBar: FC<Iprops> = () => {
  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl>
          <button
            className="btn sprite_playbar prev"
            onClick={() => null}
          ></button>
          <button
            className="btn sprite_playbar play"
            // onClick={() => null}
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
              src="https://p2.music.126.net/bkBg46eD1bS9D2mzxnKAnQ==/3395291910036707.jsp?param=34y34"
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">日落大道</span>
              <span className="singer-name">梁博</span>
            </div>
            <div className="progress">
              <Slider
              // step={0.5}
              // value={progress}
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
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
