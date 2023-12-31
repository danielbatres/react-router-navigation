import React, { useContext, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom';

const users = [
  { name: "Daniel", role: "administrator" },
  { name: "Kylan", role: "creator" },
  { name: "Jaylen", role: "reviewer" }
];

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = ({ username }) => {
    const role = users.find(user => user.name === username)?.role || "everyone";

    setUser({ username, role });
    navigate('/profile');
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  const auth = { 
    user, 
    login,
    logout
  };

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const auth = useContext(AuthContext);

  return auth;
}

function AuthRoute(props) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to={props.redirect} />;
  }

  return props.children;
}

export {
  AuthProvider,
  AuthRoute,
  useAuth,
};