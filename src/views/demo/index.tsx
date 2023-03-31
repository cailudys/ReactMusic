import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Template: FC<Iprops> = () => {
  return <>Template</>
}

export default memo(Template)
