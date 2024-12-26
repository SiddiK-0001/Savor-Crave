import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Photos from '../components/Photos';
import Lottie from 'lottie-react';
import gallery from '../assets/Animation - 1735202930262.json'

const Gallery = () => {
    const items = useLoaderData();
    return (
        <div>

            <div className="bg-cover bg-center bg-[url('https://i.pinimg.com/236x/58/b3/a8/58b3a8a6900de7c174851d9b10673cd9.jpg')] bg-blend-overlay bg-black bg-opacity-90 min-h-[50vh] flex flex-col items-center justify-center  px-10" >
                <div className='flex flex-col-reverse md:flex-row justify-between items-center md:items-start mt-7'>
                    <div className='md:w-3/4'>

                        <p className='text-5xl   font-semibold text-white '> Gallery </p>

                        <p className="text-lg font-thin text-gray-300 mt-4 tracking-widest  mb-28">
                        Explore a curated collection of our finest creations. Every image captures the essence of quality, passion, and craftsmanship, showcasing the artistry that goes into every piece. Let these visuals inspire your next purchase and immerse you in the world of carefully crafted culinary delights, where each dish tells a unique story of flavor and creativity.
                        </p>
                    </div>

                    <div>
                        <Lottie className='w-40 ' animationData={gallery}></Lottie>
                    </div>

                </div>

            </div>

            <div >
                <Photos  items={items}></Photos>
                
            </div>

        </div>
    );
};

export default Gallery;