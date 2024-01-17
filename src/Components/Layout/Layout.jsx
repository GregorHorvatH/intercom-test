import { Navbar } from '../Navbar';

import './Layout.css';

export const Layout = ({ children }) => (
  <div className="layout">
    <Navbar />
    <div className="content">{children}</div>
  </div>
);
