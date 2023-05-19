import { useState } from 'react'
import { projectAuth } from '../firebase/config'
export const useSignup = ()=>{
    const[isPending, setIsPending]=useState()
    const [error, setError] = useState();

    const signUp = async (email, password, name)=>{
        try{
            setIsPending(true)
        const req = await projectAuth.createUserWithEmailAndPassword(email, password)
        console.log(req.user);

        if(!req.user){
            throw new Error("ma'lumot yo'q")
        }

        await req.user.updateProfile({ displayName: name })
        setIsPending(false)
        setError(null)
        }catch(err){
            console.log(err.message);
            setError(err.message)

            setIsPending(false)
        }
    }
    return { signUp, isPending, error };
}