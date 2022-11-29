import React from 'react';
import img from '../../assets/images/login.png';
import useTitle from '../../hooks/useTitle';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
    // Dynamic title using hook
    useTitle('Sign Up');

    // Declare useForm to use React Hook Form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Declare event handler for form
    const handleSignUp = data => {
        console.log(data);
    }

    // Declare event handler to use google sign in
    const handleGoogleSignIn = () => {

    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    {/* Create form using React hook form & Submit form data with handleSignUp by processed with handleSubmit */}
                    <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                        {/* Style with text input from daisyUI */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                // Call register
                                {...register("name", {
                                    // Add errors handler
                                    required: "Name is required"
                                })} className="input input-bordered w-full max-w-xs"
                                placeholder='Your Name' />
                            {/* Display errors message */}
                            {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text"
                                // Validate & handle errors
                                {...register("email", { required: "Email Address is required" })}
                                className="input input-bordered w-full max-w-xs" placeholder='Email' />
                            {/* Display errors message */}
                            {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                // Validate & handle errors
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be 6 characters or longer" }
                                })}
                                className="input input-bordered w-full max-w-xs"
                                placeholder='Password' />
                            {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                        </div>
                        <input className='btn btn-primary w-full mt-4' value="Sign Up" type="submit" />
                    </form>
                    {/* Route for sign up page */}
                    <p className='text-center'>Already have an Account? <Link to="/login" className='text-primary-focus font-semibold'>Please Login</Link></p>
                    {/* Divider */}
                    <div className="divider">OR</div>
                    {/* Google Login */}
                    <div className="form-control mx-8">
                        <button onClick={handleGoogleSignIn} className='btn btn-outline btn-primary'> <FaGoogle className='mr-2'></FaGoogle> Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;