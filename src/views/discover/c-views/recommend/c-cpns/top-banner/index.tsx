import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { BannerWrapper } from './styled'
import { shallEqualApp, useAppSelector } from '@/store'

interface Iprops {
  children?: ReactNode
}

const TopBanner: FC<Iprops> = () => {
  // 从store中获取数据
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallEqualApp
  )

  return (
    <BannerWrapper>
      {banners.map((item) => {
        return <div key={item.imageUrl}>{item.imageUrl}</div>
      })}
    </BannerWrapper>
  )
}

export default memo(TopBanner)
