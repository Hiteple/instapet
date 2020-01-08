import React from 'react'
import { Router } from '@reach/router'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './components/container/PhotoCardWithQuery'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Router>
          <Home path='/' />
          <Home path='/pet/:id' />
        </Router>
      )}
    </>
  )
}
