import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import ChefProfile from '../components/ChefProfile';

const Recipes = () => {
    const chefData = useLoaderData();
     
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
  return (
    <section className='w-11/12 sm:w-3/4 md:w-11/12 py-8 mx-auto'>
        <ChefProfile data={chefData}></ChefProfile>
    </section>
  )
}

export default Recipes