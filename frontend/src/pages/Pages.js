import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { GlobalState } from '../GlobalState'
import HomePage from './HomePage'
import NotFound from './utils/not_found/NotFound'

const Pages = () => {
  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Pages
