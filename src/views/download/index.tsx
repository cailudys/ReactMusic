import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Download: FC<Iprops> = () => {
  return <>Download</>
}

export default memo(Download)
