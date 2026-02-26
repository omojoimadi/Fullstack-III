import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#333', marginBottom: '2rem' }}>
      <ul style={{ 
        listStyle: 'none', 
        display: 'flex', 
        gap: '2rem', 
        margin: 0, 
        padding: 0 
      }}>
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}