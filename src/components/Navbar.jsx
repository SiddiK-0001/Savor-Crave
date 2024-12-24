import { Link, NavLink, useNavigate } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";
import cooking from '../assets/cooking.png'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const { user, signOutUser, loading } = useContext(Authcontext);

    const navigate = useNavigate()
    // console.log(user)




    const handleOut = () => {
        signOutUser()

        navigate('/');


    }
    const links =
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/all">All Foods</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            {
                user &&
                <>
                <NavLink to="/add">Add Food</NavLink>
                    <NavLink to="/my">My Foods</NavLink>
                    <NavLink to="/orders">My Orders</NavLink>

                </>
            }
        </>
    return (
        <div className="text-black font-semibold px-2 bg-[#fdede1]">

            <div className="navbar  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}

                        </ul>
                    </div>

                    <p className="font-bold text-xl md:text-3xl text-[#af8464]  mr-1 flex items-center">Savor <span className="text-3xl lg:text-4xl">&</span> Crave</p>
                    <img className="w-14 md:w-16 color-[#CEA17E]" src={cooking} alt="" />

                </div>
               
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu gap-3 text-lg menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
              
                <div className="navbar-end">
                {loading ? (
                        <span className="loading loading-spinner loading-lg text-black"></span>
                    ) : user ? (
                        <div className="flex flex-col justify-end md:flex-row gap-2 items-center">
                            <img className="border-2 border-[#CEA17E] rounded-full w-9" src={user?.photoURL} alt="" />
                            <button onClick={handleOut} className="btn btn-sm md:btn-md bg-[#CEA17E] text-lg border-none font-bold text-black rounded-3xl">Sign out</button>
                        </div>
                    ) : (
                        <Link className="btn rounded-3xl border-none bg-[#CEA17E] text-lg font-bold text-black" to='/login'>Log in</Link>
                    )}
                </div>
            </div>


        </div>
    );
};

export default Navbar;
{/* <div className="relative mr-2 flex flex-col md:flex-row gap-2 btn h-10 btn-sm rounded-full bg-[#193806] shadow-lg border border-[#69fe0f] group">
    <img className="rounded-full w-7 h-7" src={user?.photoURL} alt="" />
    
    <div className="absolute bottom-full hidden group-hover:block bg-black text-white text-xs  px-2 py-1">
        {user?.displayName || "No Name"}
    </div>
</div> */}