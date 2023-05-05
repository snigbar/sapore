import React from 'react'
import { FaHeart,FaUserGraduate,FaHashtag } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const ChefCard = ({data}) => {

    const {chef_name, id, picture_url,recipes,likes,views,years_of_experience} = data;

  return (
        

    <div className="my-4 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

    <article className="overflow-hidden rounded-lg shadow-lg">

  
    <img alt={chef_name} className="block w-full h-64 object-cover object-top" src={picture_url}/>
   

    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg">
           
                {chef_name}
           
        </h1>
        
        <div className='flex items-center gap-2'><FaHeart className='text-red-500 text-lg' />{likes >= 1000? `${likes.toString().slice(0,1)}k`:likes}</div>
     
    </header>

    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <p className="text-sm">
                <FaUserGraduate className='text-xs inline mb-1 me-1 text-slate-400'/>{years_of_experience}+years of experience
            </p>
            <p className="text-sm"><FaHashtag className='text-xs inline mb-1 me-1 text-slate-400'/>Recipes count {recipes.length}</p>

           
    </footer>

    <Link to={`/recipes/${id}`} className='flex justify-center py-4'> <button className="rounded-full py-2 px-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:bg-gradient-to-l text-white font-bold transition duration-500 ease-in-out">View Recipes</button></Link>

</article>


</div>
    


  )
}

export default ChefCard