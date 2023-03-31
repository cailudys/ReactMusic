import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Album: FC<Iprops> = () => {
  return <>Album</>
}

export default memo(Album)
