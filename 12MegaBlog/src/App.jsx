import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useDispatch } from 'react-redux';
import authService from './Appwrite/auth';
import { Login, Logout } from './store/authSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


import './App.css'
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(Login({ userData }));
      } else {
        dispatch(Logout());
      }

    })
      .finally(() =>
        setLoading(false))/*finally block will execute no matter what happnes to  the useEffect */

  }, [])
  //if we fetch user succesfully we will dispatch login action otherwise logout action

  return !loading ? (
    <div className="min-h-screen bg-gray-400 text-white flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center">
        <Outlet />
      </main>

      <Footer />
    </div>
  ) : null;

}

export default App
