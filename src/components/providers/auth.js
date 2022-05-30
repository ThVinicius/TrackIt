import { createContext, useState } from 'react'

export const UserContext = createContext({})

export const AuthProvider = props => {
  const [user, setUser] = useState({
    token: undefined,
    image: undefined,
    habits: undefined,
    todayHabits: { progress: 0, list: [] },
    createHabits: { name: '', days: [] }
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  )
}
