import React from 'react'
import { useState, createContext, useContext } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null)

  // useEffect(()=>{
  //   const localUser=JSON.parse(localStorage.getItem('user'))
  //   user=localUser
  //   console.log(user)
  //               console.log("ddd")
  // },[user])

  const login = user => {
    setUser(user)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}