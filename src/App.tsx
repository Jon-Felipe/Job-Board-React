import { BrowserRouter, Routes, Route } from 'react-router';

// pages
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import RootLayout from './pages/Layouts/RootLayout';
import JobsPage from './pages/Jobs/JobsPage';
import JobPage from './pages/Job/JobPage';
import ProfilePage from './pages/Profile/ProfilePage';
import ProfileLayout from './pages/Layouts/ProfileLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/jobs' element={<JobsPage />} />
            <Route path='/jobs/:id' element={<JobPage />} />
            <Route path='/profile' element={<ProfileLayout />}>
              <Route index element={<ProfilePage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
