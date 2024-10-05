import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import EventsPage from './pages/EventsPage';
import EventFormPage from './pages/EventFormPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import ProtectedRoute from './ProtectedRoute';
import { EventProvider } from './context/EventsContext';
import Navbar from './components/navbar';

function App() {
  return (
    <AuthProvider>
      <EventProvider>
        <BrowserRouter>
        <main className='conteiner mx-auto px-10'>
        <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route element ={<ProtectedRoute/>}>
            <Route path='/events' element={<EventsPage/>} />
            <Route path='/add-event' element={<EventFormPage/>} />
            <Route path='/events/:id' element={<EventFormPage/>} />
            <Route path='/profile' element={<ProfilePage/>} />
            </Route>
          </Routes>
        </main>
        </BrowserRouter>
      </EventProvider>
    </AuthProvider>
  )
}
export default App;

