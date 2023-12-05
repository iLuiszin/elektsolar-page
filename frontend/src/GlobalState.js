import React, { createContext, useEffect, useState } from 'react'
import UserAPI from './api/UserAPI'
import api from './api/api'
export const GlobalState = createContext()

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false)
  const refreshToken = async () => {
    const res = await api.get('/user/refresh_token')
    setToken(res.data.accesstoken)
  }

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if (firstLogin) refreshToken()
  }, [])

  const state = {
    token: [token, setToken],
    userAPI: UserAPI(token),
  }
  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>
}
