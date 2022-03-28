import { Landing, Error, Register, Dashboard } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayouts,
  Stats,
} from './pages/dashboard';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayouts />
            </ProtectedRoute>
          }
        >
          <Route path='/all-jobs' element={<AllJobs />} />
          <Route path='/add-job' element={<AddJob />} />
          <Route index element={<Stats />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
