import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../components/Cards';

const All = () => {
    const foods = useLoaderData();
    return (
        <div>

            <div className="bg-cover bg-center bg-[url('https://i.pinimg.com/236x/58/b3/a8/58b3a8a6900de7c174851d9b10673cd9.jpg')] bg-blend-overlay bg-black bg-opacity-70 min-h-[70vh] flex flex-col items-center justify-center" >
                <p className='text-5xl text-center mt-7 font-semibold text-white'>All Foods <span className='text-6xl text-[#ce864f]'>We </span> Provide</p>

                <p className="text-lg text-gray-300 mt-4 tracking-widest text-center">
                    Discover a variety of dishes made with passion and fresh ingredients.
                </p>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-7 w-11/12 mx-auto px-3 place-items-center'>
                {
                    foods.map((item) => <Cards key={item._id} item={item}></Cards>)
                }
            </div>

        </div>
    );
};

export default All;