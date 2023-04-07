import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotRecoomendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'

interface Iprops {
  children?: ReactNode
}

const HotRecommend: FC<Iprops> = () => {
  return (
    <HotRecoomendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      ></AreaHeaderV1>
      HotRecommend
    </HotRecoomendWrapper>
  )
}

export default memo(HotRecommend)
