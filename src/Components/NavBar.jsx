import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          ShopHub
        </Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/Checkout">Cart</Link>
        </div>
          <div className="navbar-auth">
            <div className="navbar-auth-links">
              <Link to="/Auth" className="btn btn-secondsry">Login</Link>
              <Link to="/Auth" className="btn btn-primary">Logout</Link>
            </div>
          </div>
      </div> 
    </nav>
  )
}         