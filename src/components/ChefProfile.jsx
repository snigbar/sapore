import React from 'react'
import { FaHeart,FaUserGraduate,FaHashtag } from 'react-icons/fa'
import RecipesCard from './RecipesCard';

const ChefProfile = ({data}) => {

    const {chef_name, id, picture_url,recipes,likes,views,years_of_experience,bio} = data[0];
  

  return (
    <>
    <div className="card lg:card-side bg-base-100 shadow-xl">
    <img src={picture_url} className='object-cover' style={{width:"450px"}}/>

    <div className="card-body justify-center h-full">
    <div>
    <h2 className="card-title text-3xl text-center md:text-5xl md:text-left">{chef_name}</h2>
    <p className='text-slate-700 text-lg w-3/5 py-5 text-center md:text-left'>{bio}</p>
    </div>

    <div className="flex items-center justify-between leading-none mt-5">
            <p className="text-xl">
                <FaUserGraduate className='inline mb-1 me-1 text-red-600'/>{years_of_experience}+years of experience
            </p>
            <p className="text-xl"><FaHashtag className='inline mb-1 me-1 text-red-600'/>Recipes count {recipes?.length}</p>
            <p className="text-xl"><FaHeart className='inline mb-1 me-1  text-red-600'/> {likes}</p>

           
    </div>

    <a href='#recipes' className='mt-10'><button className="rounded-full p-5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:bg-gradient-to-l text-xl text-white font-bold transition duration-500 ease-in-out">View Recipes</button></a>
    </div>
  </div>

  <section className='w-11/12 sm:w-3/4 md:w-11/12 py-8 mt-10 mx-auto' id="recipes">
    {recipes.map((data,idx) => <RecipesCard value={data} key={idx}></RecipesCard>)}
    </section>
   </>
  )
}

export default ChefProfile