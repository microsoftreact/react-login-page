import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import { useAuth } from './hooks/useAuth';

function App() {
  const {user}=useAuth()
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {user && <Route path="/" element={<Home />} />}
          {!user && <Route path="/" element={<Navigate to="/login" />} />}
          {user && <Route path="/login" element={<Navigate to="/" />} />}
          {!user && <Route path="/login" element={< Login />} />}
          {user && <Route path="/signup" element={<Navigate to="/" />} />}
          {!user && <Route path="/signup" element={< Signup/>} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
