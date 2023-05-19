import { createContext, useReducer } from "react";
import {} from "../firebase/config";

export const AuthProvider = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return;
  }
};

export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
  });

  return (
    <AuthProvider.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthProvider.Provider>
  );
}
