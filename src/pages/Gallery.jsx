import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Photos from '../components/Photos';

const Gallery = () => {
    const items = useLoaderData();
    return (
        <div>

            <div className="bg-cover bg-center bg-[url('https://i.pinimg.com/236x/58/b3/a8/58b3a8a6900de7c174851d9b10673cd9.jpg')] bg-blend-overlay bg-black bg-opacity-70 min-h-[50vh] flex flex-col items-center justify-center px-5" >

                <p className='text-5xl text-center mt-7 font-semibold text-white flex flex-row flex-wrap items-center justify-center'> Gallery </p>

                <p className="text-lg text-gray-300 mt-4 tracking-widest text-center mb-28">
                    Sometimes wasting money brings you the joy you were looking for.
                </p>


            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 place-items-center px-5 my-10'>
                {
                    items.map((item)=><Photos key={item._id} item={item}></Photos>)
                }
            </div>

        </div>
    );
};

export default Gallery;