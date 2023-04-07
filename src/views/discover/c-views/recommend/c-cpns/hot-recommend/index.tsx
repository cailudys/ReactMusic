import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotRecoomendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { shallEqualApp, useAppSelector } from '@/store'
import SongMenuItem from '@/components/song-menu-item'

interface Iprops {
  children?: ReactNode
}

const HotRecommend: FC<Iprops> = () => {
  const { hotRecommends } = useAppSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommends
    }),
    shallEqualApp
  )

  return (
    <HotRecoomendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      ></AreaHeaderV1>
      <div className="recommend-list">
        {hotRecommends.map((item) => {
          return <SongMenuItem key={item.id} itemData={item}></SongMenuItem>
        })}
      </div>
    </HotRecoomendWrapper>
  )
}

export default memo(HotRecommend)
