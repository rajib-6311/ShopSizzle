import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Add from './Pages/Add';
import List from './Pages/List';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import SideBar from './Components/SideBar';
import Orders from './Pages/Orders';
import Users from './Pages/Users';
import Login from './Pages/Login';


function App() {
  const [token, setToken] = useState(
    localStorage.getItem('token') ? localStorage.getItem('token') : " "
  )

  useEffect(()=>{
    localStorage.getItem('token', token)
  },[token])

  return (
    <main className='bg-gray-50 w-full min-h-screen'>
     {
      token === " " ?
       (<Login setToken={setToken}/>) : 
     (  <>
      <Navbar token={token} setToken={setToken} />
      <div className='flex w-full'>
        <div className='w-[18%] fixed min-h-screen border-r-2'>
          <SideBar />
        </div>
      </div>

      <div className='flex-1 px-6 py-2 ml-[18%]'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<Add />} />
        <Route path="/list" element={<List />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      </div>
     </>)
     }
    </main>
  );
}

export default App;
