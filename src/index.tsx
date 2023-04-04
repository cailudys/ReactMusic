// 第三方的东西
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import 'normalize.css'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

// 重置的东西
import '@/assets/css/index.less'

// 自己写的东西
import store from './store'
import App from '@/App'
import theme from './assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
)
