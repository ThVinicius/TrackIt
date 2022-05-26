import { createContext, useState } from 'react'

export const UserContext = createContext({})

export const AuthProvider = props => {
  const [user, setUser] = useState({ token: undefined, habits: undefined })
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  )
}
