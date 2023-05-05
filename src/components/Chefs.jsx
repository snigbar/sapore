import React, { useEffect, useState } from 'react'
import ChefCard from './ChefCard';


const Chefs = () => {

    const [chefData, setChefData] = useState([]);

    useEffect(()=>{
        fetch('https://sapore-server-snigbar.vercel.app/')
        .then(res => res.json())
        .then(data => setChefData(data))
    },[])


  return (
    <section className='w-11/12 sm:w-3/4 md:w-11/12 py-8 mx-auto'>
    <div className="hero bg-base-100">
    <div className="text-center">
    <h1 className='text-3xl text-indigo-950 font-semibold uppercase'>the masterminds behind our delicious dishes</h1>
    </div>
    </div>

    <div className="container my-12 mx-auto px-4 md:px-12">
    <div className="flex flex-wrap mx-4">
       
       {chefData.map(chef =><ChefCard key={chef.id} data={chef}></ChefCard>)}

       </div>
       </div>
    </section>
  )
}

export default Chefs