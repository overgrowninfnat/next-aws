import { useState, useEffect, createContext, useContext } from 'react';
import { Auth, Hub } from 'aws-amplify';

const authContext = createContext();

export default function AuthProvider({ children }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState(null)
  useEffect(async () => {
    Hub.listen('auth', async (data) => {
      switch (data.payload.event) {
        case 'signIn':
          const loggedUser = await Auth.currentAuthenticatedUser();
          setUser(loggedUser)
          setIsUserLoggedIn(true);
          break;
        case 'signOut':
          setUser(null)
          setIsUserLoggedIn(false);
          break;
      }
    });
    try {
      const loggedUser = await Auth.currentAuthenticatedUser();
      setUser(loggedUser)
      setIsUserLoggedIn(true);
    } catch (err) {
      setUser(null)
      setIsUserLoggedIn(false);
    }
  }, []);
  return (
    <authContext.Provider value={{isUserLoggedIn, user}}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
};
