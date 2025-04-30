import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const MainLayouts = () => {
 const navigate = useNavigate()
 const userData = useSelector((state)=> state.auth.value)
 useEffect(()=> {
  if(!userData){
   navigate("/login")
  }
 },[])


  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="fixed md:relative">
        <Navbar />
      </div>

      {/* Content Area */}
      <main className="flex-1 ml-16 sm:ml-20 md:ml-24 lg:ml-0">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayouts;
