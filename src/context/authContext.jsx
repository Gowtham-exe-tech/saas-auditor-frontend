{/* check token exists if yes then restore user session,
    then sends login, logout, user object (globally)
    Avoid prop-drilling checks */}

import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    const username = localStorage.getItem("username");

    if (token && role) {
      setUser({ token, role, username });
    }
  }, []);

  const login = (token, role, username) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);//not needed
    localStorage.setItem("username", username);
    setUser({ token, role, username });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};