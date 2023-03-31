import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Mine: FC<Iprops> = () => {
  return <>Mine</>
}

export default memo(Mine)
