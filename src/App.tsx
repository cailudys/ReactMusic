import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import Download from './views/download'

function App() {
  return (
    <>
      <Download name="hh" age={18}></Download>
      <div className="App">{useRoutes(routes)}</div>
    </>
  )
}

export default App
