import React, { useContext, useEffect } from 'react'
import NavigationBar from '../shared/NavigationBar'
import { Outlet } from 'react-router-dom'
import Footer from '../shared/Footer'
import { AuthContext } from '../Providers/AuthProvider'

const Main = () => {
    const {user,loading} = useContext(AuthContext)
  
  return (
    <div>

        {!loading && <NavigationBar></NavigationBar>}
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main