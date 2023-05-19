import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuth } from "./useAuth";
export const useLogin = () => {
  const [isPending, setIsPending] = useState();
  const [error, setError] = useState();
  const {dispatch} = useAuth();
  

  const login = async (email, password) => {
    try {
      setIsPending(true);
      const req = await projectAuth.signInWithEmailAndPassword(
        email,
        password
      );
      dispatch({ type: "LOGIN", payload: req.user });

      if (!req.user) {
        throw new Error("ma'lumot yo'q");
      }

      setIsPending(false);
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);

      setIsPending(false);
    }
  };
  return { login, isPending, error };
};
