import React from 'react'
import './Signup.css'
import {useState} from 'react'
import { useSignup } from '../../hooks/useSignup';
function Signup() {
    const [email, setEmail] = useState();
    const [password, setPassword]=useState()
    const [name, setName] = useState();
    const { signUp, isPending, error } = useSignup()

    const handleSubmit =(e)=>{
        e.preventDefault()
        signUp(email, password, name);
    }
  return (
    <form onSubmit={handleSubmit} className="signup-form" action="">
      <label htmlFor="">
        <span>email:</span>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          required
        />
      </label>
      <label htmlFor="">
        <span>password:</span>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          required
        />
      </label>
      <label htmlFor="">
        <span>name:</span>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          required
        />
      </label>
      {!isPending && <button className="btn">Signup</button>}
      {isPending && <button className="btn" disabled>Loading...</button>}
      {error && <p>{error}</p>}
    </form>
  );
}

export default Signup