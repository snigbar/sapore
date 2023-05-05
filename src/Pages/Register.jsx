import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {

    const {setUser,createUser,updateUser} = useContext(AuthContext);
    const navigate = useNavigate();
    // error
    const [error, setError] = useState(false);

    // creating user
    const handleRegister = event => {
   

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;


        if(password.length < 6){
            setError("password must be at least 6 characters")
            return
        }


        createUser(email,password)
        .then((res) =>{
            // adding image and name
            updateUser(name,photo);
            form.reset();
            setUser(res.user);
            navigate('/')


        }).catch(err => console.log(err));

        
        

    }

  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-700">Please register</h1>

           
            {/* login form */}
            <form className="space-y-4" onSubmit={handleRegister}>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" name="name" className="w-full input input-bordered input-primary" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email Address" name="email" className="w-full input input-bordered input-primary" required/>
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Photo Url</span>
                    </label>
                    <input type="text" placeholder="Photo Url"
                        className="w-full input input-bordered input-primary" name="photo" required />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Password"
                        className="w-full input input-bordered input-primary" name="password" required/>
                </div>

                
                <div>
                {error && <p className='text-red-500'>{error}</p>}
                <button className="btn btn-block btn-primary my-4">Sign Up</button>
                </div>
                <span>Already have an account ?
                    <Link to="/login" className="text-blue-600 hover:text-blue-800 hover:underline">Login</Link></span>
            </form>
        </div>
    </div>
  )
}

export default Register