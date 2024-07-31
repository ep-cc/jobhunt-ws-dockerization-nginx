import { Outlet, useNavigate } from 'react-router-dom';

export default function Layout() {
  const navigate = useNavigate();
  return <>
    <nav>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/codecool')}>Codecool</button>
      <button onClick={() => navigate('/about')}>About</button>
      <button onClick={() => navigate('/bad-url')}>Oops</button>
    </nav>

    <div className='page-wrapper'>
      <Outlet />
    </div> 
  </>
}
