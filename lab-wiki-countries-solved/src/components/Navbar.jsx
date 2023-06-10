import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <header>
      <h3
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer', margin: '10px 0' }}
      >
        {' '}
        LAB - WikiCountries{' '}
      </h3>
    </header>
  );
}

export default Navbar;
