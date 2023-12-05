import { useEffect, useState } from 'react'
import api from './api'

function UserAPI(token) {
  const [isLogged, setIsLogged] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await api.get('/user/info', {
            headers: { Authorization: token },
          })
          setIsLogged(true)
          res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)
        } catch (error) {
          alert(error.response.data.msg)
        }
      }
      getUser()
    }
  }, [token])

  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
  }
}

export default UserAPI
