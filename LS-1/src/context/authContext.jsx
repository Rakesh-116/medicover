import { createContext, useState } from 'react';
import PropTypes from 'prop-types'

export const AuthContext = createContext();

export const AuthProvider = ({child}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {child}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  child: PropTypes.node.isRequired,
};