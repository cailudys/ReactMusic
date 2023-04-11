import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Player: FC<Iprops> = () => {
  return <>Player</>
}

export default memo(Player)
