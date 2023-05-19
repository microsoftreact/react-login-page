import { useContext } from "react";
import { AuthProvider } from "../context/AuthContext";

export const useAuth=()=>{
    const context=useContext(AuthProvider)

    return context
}