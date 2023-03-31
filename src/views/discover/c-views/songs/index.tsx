import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Songs: FC<Iprops> = () => {
  return <>Songs</>
}

export default memo(Songs)
