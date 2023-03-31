import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Recommend: FC<Iprops> = () => {
  return <>Recommend</>
}

export default memo(Recommend)
