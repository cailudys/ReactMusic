import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Discover: FC<Iprops> = () => {
  return <>Discover</>
}

export default memo(Discover)
