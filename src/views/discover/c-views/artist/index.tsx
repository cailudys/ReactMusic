import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Artist: FC<Iprops> = () => {
  return <>Artist</>
}

export default memo(Artist)
