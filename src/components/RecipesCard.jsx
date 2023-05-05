import React, { useState } from 'react'
import { FaStar,FaRegClock} from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RecipesCard = ({value}) => {

    const {name, image_url, ingredients,cooking_method,description,rating,time_to_cook} =value;
    
    const [favorite, setFavorite] = useState(true);

    const notify = () => {
        toast.success("the recipe added to your favorite")
        setFavorite(false)
    };
    
  return (
   
    <div className="card lg:card-side bg-base-100 shadow-xl my-5">
<img src={image_url} className='object-cover' style={{width:"400px"}}/>

    <div className="card-body justify-center h-full">
    <div>
    <h2 className="card-title text-3xl text-center my-4 md:text-5xl md:text-left">{name}</h2>
    <p className='text-slate-700 text-lg text-center md:text-left'><span className='font-bold'>Ingredients:</span> {ingredients.map((el,idx) =><span key={idx}>{el}, </span>)}</p>
    <p className='text-slate-700 text-lg py-5 text-center md:text-left'><span className='font-bold'>Description:</span> {description}</p>
    <p className='text-slate-700 text-lg text-center md:text-left'><span className='font-bold'>How to cook:</span> {cooking_method}</p>
    </div>

    <div className="flex items-center justify-between leading-none mt-5">
            <p className="text-xl">
                <FaRegClock className='inline mb-1 me-1 text-red-600'/>{time_to_cook} to cook
            </p>
            <p className="text-xl"><FaStar className='inline mb-1 me-1 text-red-600'/>Ratings: {rating}</p>
            <div>
                {
                   favorite?<button className={`rounded-full px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:bg-gradient-to-l text-lg text-white font-bold transition duration-500 ease-in-out`} onClick={notify}>Add to Favorite</button>
                   :<button className={`rounded-full px-4 py-3 bg-gradient-to-r from-orange-300 to-amber-300 text-lg text-white font-bold`} disabled>Add to Favorite</button>
                
                
                }
            <ToastContainer 
            closeOnClick
            autoClose={3000}
            />

      </div>

    </div>

    </div>
  </div>

  )
}

export default RecipesCard