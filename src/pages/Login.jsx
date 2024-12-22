

import React, { useContext } from 'react';


import Lottie from "lottie-react";
import login from '../assets/Animation - 1734847289917.json'
import { useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { Authcontext } from '../provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';


const Login = () => {

    const [errorMessage, setError] = useState('')
    const [eye, setEye] = useState(false)
    const emailRefoo = useRef();
    const navigate = useNavigate();

    const { loginUser,signInWithGoogle } = useContext(Authcontext)

    const handleEye = () => {
        setEye(!eye)
    }

    const handleGoogle =()=>{
        return signInWithGoogle()
        .then(result => {
            // console.log(result.user)

            toast.success('Successfully logged in', {
                autoClose: 500
            });

           

            setTimeout(() => {
                navigate('/');
            }, 1000);

        })
        .catch(error => {
            setError(error.message)
        })

    }

    const handlelogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        // console.log(email,password)


        setError('');

        if (!terms) {
            setError('Please accept our terms and conditions')
            return;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError('Password should contain atleast one lowercase, one uppercase and a minimum length of 6');
            return;
        }


        loginUser(email, password)
            .then(result => {
                // console.log(result.user)

                toast.success('Successfully logged in', {
                    autoClose: 500
                });

                e.target.reset();

                setTimeout(() => {
                    navigate('/');
                }, 1000);

            })
            .catch(error => {
                // setError(error.message)
            })


    }

    const handlePass=()=>{
        const email = emailRefoo.current.value;
      if(email){
        sendPasswordResetEmail(auth, email)
        .then(() => {
            toast.success('Password reset email sent,check your email',{
                autoClose: 500
            });
                               
        })

        .catch((error) => {
        //   console.log(error)
        });
    }
    else{        
        toast.error("Something went wrong", {
            autoClose: 2000,
        });
      }
    }



    return (

        <div >
            <ToastContainer position='top-center' />

            <div className='py-8'
                style={{
                    backgroundImage: "url('https://i.pinimg.com/474x/b6/08/af/b608affc2e826a12a1e34989c70aa3df.jpg')",
                    backgroundSize: "cover",

                    backgroundPosition: "center",
                    minHeight: "60vh",
                    width: "100%",
                  
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    backgroundBlendMode: "overlay",
                }}
            >
                <div className='flex flex-col items-center justify-center' >


                    <div className="hero flex items-center justify-center   w-full px-3 mx-auto   text-black">
                        <div className="hero-content flex-col lg:flex-row">

                            <div className="text-center lg:text-left">
                                <Lottie className='w-60 hidden lg:flex' animationData={login}></Lottie>
                                <h1 className="text-5xl font-bold text-white">Login now!</h1>
                               
                                <p className='text-white text-xl mt-4'>Don't have an Account? Please <NavLink to="/register" className='text-[#ab805d] text-2xl underline underline-offset-4'>Register</NavLink></p>
                            </div>

                            <div className="card bg-[#9e673bd2] w-full max-w-sm shrink-0 shadow-2xl">
                                <form onSubmit={handlelogin} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="text-lg font-bold ">Email</span>
                                        </label>
                                        <input ref={emailRefoo} type="email"  name="email" placeholder="email" className="input input-bordered" required />
                                    </div>


                                    <div className="form-control relative">
                                        <label className="label">
                                            <span className="text-lg font-bold ">Password</span>
                                        </label>
                                        <input type={eye ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />

                                        <button onClick={handleEye} className="absolute right-3 top-16" type="button">
                                            {
                                                eye ? <FaEye /> : <IoIosEyeOff />
                                            }
                                        </button>

                                     


                                        <button type='button' onClick={handlePass} className="label">
                                            <span className="label-text-alt  link link-hover text-black font-bold ">Forgot password?</span>
                                        </button >
                                        
                                    </div>


                                    <div className="form-control">
                                        <label className="label gap-2 cursor-pointer">
                                            <input type="checkbox" name="terms" className="checkbox border border-black  " />
                                            <span className="text-black text-lg font-bold ">Accept our terms and conditions</span>
                                        </label>
                                    </div>

                                    <div className="form-control mt-2">
                                        <button className="btn  bg-black text-[#d89d6c] border-none font-bold text-xl">Login</button>
                                    </div>

                                    <div className="flex items-center justify-center my-2">
                                        <div className="h-px bg-black flex-grow"></div>
                                        <span className="px-3 text-xl ">Or</span>
                                        <div className="h-px bg-black flex-grow"></div>
                                    </div>


                                    <button className='btn text-xl' onClick={handleGoogle}><FcGoogle className='text-4xl'></FcGoogle>Log in With GOOGLE</button>


                                </form>
                                {
                                    errorMessage && <p className="text-red-700 font-bold text-center">{errorMessage}</p>
                                }

                            </div>
                        </div>
                    </div>

                 

                </div>


            </div>

        </div>




    );
};

export default Login;