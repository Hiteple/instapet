import React, { createContext, useState } from 'react'
<<<<<<< HEAD
export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const value = {
    isAuth,
    activateAuth: token => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
=======
const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true)
    }
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
>>>>>>> 0fac051efc47806907b67fba850277a9580c9a26
}

export default {
  Provider,
  Consumer: Context.Consumer
}
