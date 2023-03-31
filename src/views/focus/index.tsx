import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Focus: FC<Iprops> = () => {
  return <>Focus</>
}

export default memo(Focus)
