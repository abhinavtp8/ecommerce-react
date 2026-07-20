// 

import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../../pages/Navbar"

const HomeLayout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-slate-50">

      <Navbar />

      <main className="grow">
        <Outlet />
      </main>

      <footer className="w-full bg-red-950 text-white py-10 px-8 mt-20 text-center text-sm">
        <p>&copy; 2026 DayMart. All Rights Reserved.</p>
      </footer>

    </div>
  )
}

export default HomeLayout