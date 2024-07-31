import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Layout from './Layout';
import Codecool from './Codecool';
import ErrorPage from './ErrorPage';



function App() {

  return (
    <main>
      <h1>Dockerization workshop</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<div>This is the landing page</div>} />
            <Route path='codecool' element={<Codecool />} />
            <Route path='about' element={<div>Example app for dockerization</div>} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App
