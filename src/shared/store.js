import React from 'react'

export const AppContext = React.createContext()

const initialState = {
  contacts: null,
  lastUpdate: null,
}

export const StoreProvider = ({ children }) => {
  const [contacts, setContacts] = React.useState(initialState)

  return (
    <AppContext.Provider value={[contacts, setContacts]}>
      {children}
    </AppContext.Provider>
  )
}