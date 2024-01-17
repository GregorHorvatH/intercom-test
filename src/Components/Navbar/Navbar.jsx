import { Link } from 'react-router-dom';

import './Navbar.css';

export const Navbar = () => (
  <div className="navbar">
    <Link to="/">Home</Link>
    <Link to="/page-1">Page 1</Link>
    <Link to="/page-2">Page 2</Link>
    <Link to="/page-3">Page 3</Link>
  </div>
);
