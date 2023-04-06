import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet, Link } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar'

interface Iprops {
  children?: ReactNode
}

const Discover: FC<Iprops> = () => {
  return (
    <>
      <NavBar></NavBar>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </>
  )
}

export default memo(Discover)
