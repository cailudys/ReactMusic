import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
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
        <button className="sprite_02 arrow arrow-right"></button>
      </div>
    </NewAlbumWapper>
  )
}

export default memo(NewAlbum)
