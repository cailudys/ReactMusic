import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Carousel } from 'antd'

import { NewAlbumWapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'

interface Iprops {
  children?: ReactNode
}

const NewAlbum: FC<Iprops> = () => {
  return (
    <NewAlbumWapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/disciver/album"></AreaHeaderV1>
      <div className="content">
        <button className="sprite_02 arrow arrow-left"></button>
        {/* 发现添加轮播图之后，导致整个页面的样式发生了变化，这时问什么？ */}
        <div className="banner">
          <Carousel>
            {[1, 2].map((item) => {
              return <div key={item}>{item}</div>
            })}
          </Carousel>
        </div>
        <button className="sprite_02 arrow arrow-right"></button>
      </div>
    </NewAlbumWapper>
  )
}

export default memo(NewAlbum)
