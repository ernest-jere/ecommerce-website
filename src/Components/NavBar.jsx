import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          ShopHub
        </Link>
        <div className="navbar-links"></div>
      </div> 
    </nav>
  )
}         