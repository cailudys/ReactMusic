import React, { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppPlayerBar from './views/player/app-player-bar'
import { useAppDispatch } from './store'
import { fetchCurrentSongAction } from './views/player/store/player'

function App() {
  // 获取某一首歌
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCurrentSongAction(2037945324))
  })

  return (
    <div className="App">
      <AppHeader></AppHeader>
      <Suspense fallback="">
        <div className="main"> {useRoutes(routes)}</div>
      </Suspense>
      <AppFooter></AppFooter>
      <AppPlayerBar></AppPlayerBar>
    </div>
  )
}

export default App
