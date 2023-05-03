import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className="navbar bg-base-100 px-3 py-4 md:py-4 md:px-4 md:w-10/12 mx-auto">
  <div className="flex-1">
    <a className="font-mono font-semibold text-slate-700 normal-case text-3xl tracking-wide">SAPORE<span className='text-4xl font-extrabold text-amber-500 spacing tracking-tighter'>.</span></a>
  </div>
  <div className="flex gap-4 md:gap-8">
    
    <div className="flex-none">
    <ul className="menu menu-horizontal gap-8 px-1 text-lg text-slate-700 font-medium">
      <Link to="/">Home</Link>
      <Link to='/'>Blog</Link>
    </ul>
    </div>
   
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar border-cyan-600">
        <div className="w-10 rounded-full">
          <img src="https://cdn.drawception.com/images/avatars/647493-B9E.png" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        <li><Link>Logout</Link></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default NavigationBar