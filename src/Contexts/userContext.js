import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../Firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(false);
   const userSignUp = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const userLogin = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }
   const userSignOut = () => {
      return signOut(auth)
   }
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser);
      })
      return () => unsubscribe()
   }, [])

   const value = {
      auth,
      user,
      setUser,
      loading,
      setLoading,
      userSignUp,
      userLogin,
      userSignOut
   }
   return (
      <AuthContext.Provider value={value}>
         {children}
      </AuthContext.Provider>
   );
};

export default UserContext;