import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../provider/AuthProvider';

const Purchase = () => {
    const food = useLoaderData();
    const { user } = useContext(Authcontext);
    console.log(user)
    return (
        <div>

            <div className="bg-cover bg-center bg-[url('https://i.pinimg.com/236x/58/b3/a8/58b3a8a6900de7c174851d9b10673cd9.jpg')] bg-blend-overlay bg-black bg-opacity-70 min-h-[50vh] flex flex-col items-center justify-center px-5" >
                
                    <p className='text-5xl text-center mt-7 font-semibold text-white flex flex-row flex-wrap items-center justify-center'> Wanna<span className='text-6xl text-[#ce864f]'>Purchase</span>?? </p>

                    <p className="text-lg text-gray-300 mt-4 tracking-widest text-center mb-28">
                        Sometimes wasting money brings you the joy you were looking for.
                    </p>
               

            </div>



            <div className="mb-10 px-5 flex items-center justify-center -mt-20">
                <form

                    className="bg-white border border-[#CEA17E] rounded-lg shadow-md p-6 w-full max-w-md"
                >
                    <h2 className="text-4xl font-semibold text-center text-[#b78157] mb-6">
                        Purchase Food
                    </h2>

                    {/* Food Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Food Name
                        </label>
                        <input
                            type="text"
                            name="foodName"
                            value={food.name}

                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg "
                        />
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Price ($)
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={food.price}

                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg "
                        />
                    </div>

                    {/* Quantity */}
                    <div className="mb-4">
                        <label htmlFor="quantity" className="block text-gray-700 font-medium mb-1">
                            Quantity
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            min="1"

                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg "
                        />
                    </div>

                    {/* Buyer Name (Read-Only) */}
                    <div className="mb-4">
                        <label htmlFor="buyerName" className="block text-gray-700 font-medium mb-1">
                            Buyer Name
                        </label>
                        <input
                            type="text"
                            id="buyerName"
                            name="buyerName"
                            value={user.displayName}
                            readOnly
                            className="w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded-lg "
                        />
                    </div>

                    {/* Buyer Email (Read-Only) */}
                    <div className="mb-4">
                        <label htmlFor="buyerEmail" className="block text-gray-700 font-medium mb-1">
                            Buyer Email
                        </label>
                        <input
                            type="email"
                            id="buyerEmail"
                            name="buyerEmail"
                            value={user.email}
                            readOnly
                            className="w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded-lg "
                        />
                    </div>

                    {/* Purchase Button */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-[#CEA17E] text-white font-semibold rounded-lg hover:bg-[#654933] transition-colors duration-400"
                    >
                        Purchase
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Purchase;