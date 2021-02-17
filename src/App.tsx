import React from 'react'
import RouterView from './router/index'
import Header from './components/Header/index'
import Player from './components/Player/index'
import Provider from './store/provider'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <Provider>
      <div className="wyy-app">
        <BrowserRouter>
          <Header />
          <RouterView />
        </BrowserRouter>
        <Player />
      </div>
    </Provider>
  )
}

export default App
