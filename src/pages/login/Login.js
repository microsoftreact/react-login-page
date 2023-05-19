import React, { useState } from 'react'
import { useLogin } from '../../hooks/useLogin';
import './Login.css'

function Login() {
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const { login, isPending, error } = useLogin();

   const hadleSubmit=(e)=>{
    e.preventDefault()
    login(email, password);
   }

  return (
    <form onSubmit={hadleSubmit} className="login-form" action="">
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
      {!isPending && <button className="btn">Login</button>}
      {isPending && <button className="btn">Loading...</button>}
      {error && <p>{error}</p>}
    </form>
  );
}

export default Login