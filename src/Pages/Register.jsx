import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-700">DaisyUI</h1>
            <form className="space-y-4">
                <div>
                    <label className="label">
                        <span className="text-base label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" className="w-full input input-bordered input-primary" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email Address" className="w-full input input-bordered input-primary" required/>
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Photo Url</span>
                    </label>
                    <input type="text" placeholder="Photo Url"
                        className="w-full input input-bordered input-primary" required />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Password"
                        className="w-full input input-bordered input-primary" required/>
                </div>
                <div>
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