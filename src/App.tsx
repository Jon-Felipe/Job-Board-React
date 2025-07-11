import { BrowserRouter, Routes, Route } from 'react-router';

// pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login/LoginPage';
import RootLayout from './pages/Layouts/RootLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
