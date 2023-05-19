import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useLogout } from '../hooks/useLogout';


function Navbar() {
    const {user} =useAuth();
    const {logout}=useLogout()
    console.log(user);
  return (
    <div className="navbar">
      <ul>
        <li className="title">
          <Link to="/">myMoney</Link>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
        {user && (
            <>
            <li>hello, {user.displayName}</li>
            <li>
                <button onClick={logout} className='btn'>
                    Logout
                </button>
            </li>
            </>
        )}
      </ul>
    </div>
  );
}

export default Navbar