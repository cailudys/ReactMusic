import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import { fetchBannerDatatAction } from './store/recommend'
import TopBanner from './c-cpns/top-banner'

interface Iprops {
  children?: ReactNode
}

const Recommend: FC<Iprops> = () => {
  const dispatch = useAppDispatch()

  // 发起action获取数据
  useEffect(() => {
    dispatch(fetchBannerDatatAction())
  }, [])

  return (
    <>
      <TopBanner></TopBanner>
      recommend
    </>
  )
}

export default memo(Recommend)
