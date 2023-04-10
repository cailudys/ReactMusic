import React, { memo, useRef } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { Carousel, Divider } from 'antd'

import { NewAlbumWapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import NewAlbumItem from '@/components/new-album-item'

interface Iprops {
  children?: ReactNode
}

const NewAlbum: FC<Iprops> = () => {
  const CarouselRef = useRef<ElementRef<typeof Carousel>>(null)

  const { newAlbums } = useAppSelector((state) => ({
    newAlbums: state.recommend.newAlbum
  }))

  function handlePreveClick() {
    CarouselRef.current?.prev()
  }
  function handleNextClick() {
    CarouselRef.current?.next()
  }

  return (
    <NewAlbumWapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/disciver/album"></AreaHeaderV1>
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={handlePreveClick}
        ></button>
        <div className="banner">
          <Carousel ref={CarouselRef} speed={900}>
            {[0, 1].map((item: any) => {
              return (
                <div key={item}>
                  <div className="album-list">
                    {newAlbums.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <NewAlbumItem key={album.id} itemData={album} />
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={handleNextClick}
        ></button>
      </div>
    </NewAlbumWapper>
  )
}

export default memo(NewAlbum)
