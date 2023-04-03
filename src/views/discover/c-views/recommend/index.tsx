import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import hyRequest from '@/service'

interface Iprops {
  children?: ReactNode
}

const Recommend: FC<Iprops> = () => {
  const [banners, setBanners] = useState<any[]>([])

  // 测试网络请求
  useEffect(() => {
    hyRequest
      .get({
        url: '/banner'
      })
      .then((res) => console.log(res))
  }, [])

  return <>Recommend</>
}

export default memo(Recommend)
