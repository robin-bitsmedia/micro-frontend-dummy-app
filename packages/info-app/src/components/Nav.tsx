import React from 'react';
import { Link } from 'react-router-dom';

const Routes: React.FC = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>

    <li>
      <Link to="/about-us">About Us</Link>
    </li>

    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
);

export default Routes;