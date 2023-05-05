import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider';

const NavigationBar = () => {

  const { user,logOut} = useContext(AuthContext);

 
  return (
    <div className="navbar bg-base-100 px-3 py-4 md:py-4 md:px-4 md:w-10/12 mx-auto">
  <div className="flex-1">
    <a className="font-mono font-semibold text-slate-700 normal-case text-3xl tracking-wide">SAPORE<span className='text-4xl font-extrabold text-amber-500 spacing tracking-tighter'>.</span></a>
  </div>
  <div className="flex gap-4 md:gap-8">
    
    <div className="flex-none">
    <ul className="menu menu-horizontal gap-8 px-1 text-lg text-slate-700 font-medium">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blog">Blog</NavLink>
 
    </ul>
    </div>
   
    <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar border-cyan-600">
    {user?.displayName &&  <div className="w-10 rounded-full">
          <img src={user.photoURL} title={`${user.displayName} (reload if image doesn't appear)`}/>
        </div>}
      </label>
      <ul tabIndex={0} className="mt-3 p-2 drop-shadow-xl menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            {user?.displayName}
          </a>
        </li>
        <li><Link onClick={()=>logOut()}>Logout</Link></li>
      </ul>
    </div>

   {user?<button className="btn btn-warning px-4" onClick={()=>logOut()}>Logout</button>:<Link to='/login'><button className="btn btn-primary hover:bg-indigo-800 px-4">Login</button></Link>} 
  </div>
</div>
  )
}

export default NavigationBar