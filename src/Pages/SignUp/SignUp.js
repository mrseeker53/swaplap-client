import React, { useContext, useState } from 'react';
import img from '../../assets/images/login.png';
import useTitle from '../../hooks/useTitle';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    // Dynamic title using hook
    useTitle('Sign Up');

    // Declare useForm to use React Hook Form
    const { register, handleSubmit, formState: { errors } } = useForm();
    // Declare context using the useContext hook to use context info
    const { createUser, signInWithGoogle, updateUser } = useContext(AuthContext);
    // Declare State for login error
    const [signUpError, setSignUpError] = useState('');
    // Use JWT Token
    // Declare state to set social login email after login
    const [loginUserSocialEmail, setLoginUserSocialEmail] = useState('');
    // Declare state to set email after creating the user
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    // Call the useToken hook to use token (jwt) as an array
    const [token] = useToken(createdUserEmail, loginUserSocialEmail);
    // Declare useNavigate to navigate the user
    const navigate = useNavigate();

    // If the token is found, navigate to the home route
    if (token) {
        navigate('/');
    }

    // Declare event handler for form
    const handleSignUp = data => {
        console.log(data);
        // Clear signup error if get before
        setSignUpError('');
        // Call the createUser with params to create a user
        createUser(data.email, data.password, data.role)
            .then(result => {
                // Create user
                const user = result.user;
                console.log(user);
                // Use toast to show pop up message
                toast.success('User created successfully')

                // Set user info to update the user
                const userInfo = {
                    displayName: data.name
                }
                // Call the updateUser with param to update the user info
                updateUser(userInfo)
                    .then(() => {
                        // Call the saveUser with name, email
                        saveUser(data.name, data.email, data.role);
                    })
                    .catch(error => console.log(error));
            })
            // Set signup error
            .catch(error => {
                console.log(error.message);
                setSignUpError(error.message);
            });
    }

    // Declare saveUser function with name, email params to save the user data in the database
    const saveUser = (name, email, role) => {
        // Set user with an object that has two keys
        const user = { name, email, role };
        // Call the fetch to send a request with user data to the server API & get a response with user data from the server
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            // Get a response
            .then(res => res.json())
            .then(data => {
                // Set the state
                setCreatedUserEmail(email);
                setLoginUserSocialEmail(email);
            })
    }

    // Declare event handler to use google sign in
    const handleGoogleSignIn = () => {
        // Call the signInWithGoogle
        signInWithGoogle()
            .then(result => {
                // Login
                const user = result.user;
                console.log(user);

                // Call the updateUser with param to update the user info
                updateUser(user)
                    .then(() => {
                        // Call the saveUser with name, email
                        saveUser(user.displayName, user.email);
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.error(error))
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
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Select Your Identity</span>
                            </label>
                            <select name="role"
                                // Validate
                                {...register("select", {
                                    required: "Select an option"
                                })}
                                className="select select-bordered">
                                <option selected>Buyer</option>
                                <option>Seller</option>
                            </select>
                        </div>
                        <input className='btn btn-primary w-full mt-4' value="Sign Up" type="submit" />
                        {/* Display signup error using conditional rendering */}
                        <div>
                            {signUpError && <p className='text-error mb-3'>{signUpError}</p>}
                        </div>
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