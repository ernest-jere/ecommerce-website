import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function NavBar() {
  const {user, logout} = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          StoreHouse
        </Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/Checkout">Cart</Link>
        </div>
          {!user ? (<div className="navbar-auth">
            <div className="navbar-auth-links">
              <Link to="/Auth" className="btn btn-secondary">Login</Link>
              <Link to="/Auth" className="btn btn-primary">Signup</Link>
            </div>
          </div>
          ) : (
          <div className="navbar-user user-name">
            <span>Hello, {user.email}</span>
            <button className="btn btn-secondary" onClick={logout}>
              Logout
            </button>
          </div>)}
      </div> 
    </nav>
  )
}         