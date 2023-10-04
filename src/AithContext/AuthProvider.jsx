import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState } from 'react';
import auth from '../../Firebase/Firebase.config';
import { fromJSON } from 'postcss';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = () => {
    return createUserWithEmailAndPassword(auth)
  }
  const authInfo = { user }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

