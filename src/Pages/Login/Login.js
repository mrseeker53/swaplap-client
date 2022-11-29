import React, { useContext, useState } from 'react';
import img from '../../assets/images/login.png';
import useTitle from '../../hooks/useTitle';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    // Dynamic title using hook
    useTitle('Log In');

    // Declare useForm hook to validate & submit form data, handle errors
    const { register, formState: { errors }, handleSubmit } = useForm();

    // Declare context using the useContext hook to use context info
    const { signIn, signInWithGoogle, updateUser } = useContext(AuthContext);

    // Declare State for login error
    const [loginError, setLoginError] = useState('');

    // Use JWT Token
    // Declare state to set social login email after login
    const [loginUserSocialEmail, setLoginUserSocialEmail] = useState('');
    // Declare state to set email after login the user
    const [loginUserEmail, setLoginUserEmail] = useState('');
    // Call the useToken hook to use jwt token as an array
    const [token] = useToken(loginUserEmail, loginUserSocialEmail);

    // Declare location to get previous location
    const location = useLocation();
    // Declare navigate to send the user
    const navigate = useNavigate();

    // Set the location to navigate the user to the private route or home
    const from = location.state?.from?.pathname || '/';

    // If token is found, navigate to the previous route
    if (token) {
        navigate(from, { replace: true });
    }

    // Declare event handler
    const handleLogin = data => {
        console.log(data);
        // Clear login error if get before
        setLoginError('');
        // Call the signIn with params to login
        signIn(data.email, data.password)
            .then(result => {
                // Login
                const user = result.user;
                console.log(user);
                // Set the state
                setLoginUserEmail(data.email);
            })
            // Set login error
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message);
            });
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
                        setLoginUserSocialEmail(user.email);
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
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    {/* Create form using React hook form & Submit form data with handleLogin by processed with handleSubmit */}
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                        {/* Style with text input from daisyUI */}
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
                            <label className="label">
                                <Link to="/signup" className="label-text-alt link link-hover text-primary-focus">Forgot password?</Link>
                            </label>
                        </div>
                        <input className='btn btn-primary w-full' value="Login" type="submit" />
                        {/* Display login error using conditional rendering */}
                        <div>
                            {loginError && <p className='text-error mb-3'>{loginError}</p>}
                        </div>
                    </form>
                    {/* Route for sign up page */}
                    <p className='text-center'>New to Swaplap? <Link to="/signup" className='text-primary-focus font-semibold'>Create an Account</Link>
                    </p>
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

export default Login;