import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import { Link } from 'react-router-dom'

import headerTitles from '@/assets/data/header_titles.json'

interface Iprops {
  children?: ReactNode
}

const AppHeader: FC<Iprops> = () => {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="/">
            网页云音乐
          </a>
          <div className="title-list"></div>
        </HeaderLeft>
        <HeaderRight>headerright</HeaderRight>
      </div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
