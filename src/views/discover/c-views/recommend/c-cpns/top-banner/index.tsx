import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { Carousel } from 'antd'

import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './styled'
import { shallEqualApp, useAppSelector } from '@/store'

interface Iprops {
  children?: ReactNode
}

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
}

const TopBanner: FC<Iprops> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  // 创建一个ref，传递给需要控制的组件
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  // 从store中获取数据
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallEqualApp
  )

  function handlePrevClick() {
    bannerRef.current?.prev()
  }

  function handleNextClick() {
    bannerRef.current?.next()
  }

  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }

  let bgImageUrl = banners[currentIndex]?.imageUrl
  if (currentIndex >= 0 && banners.length > 0) {
    bgImageUrl = banners[currentIndex].imageUrl + '?imageView&blur=40x20'
  }

  console.log('bgImageUrl', bgImageUrl)

  return (
    <BannerWrapper
      style={{
        background: `url('${bgImageUrl}') center center / 6000px`
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            afterChange={handleAfterChange}
          >
            {banners.map((item) => {
              return (
                <div key={item.url} className="banner-item">
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  ></img>
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
