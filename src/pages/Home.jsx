import React from 'react';
import Banner from '../components/Banner';
import { Link, useLoaderData } from 'react-router-dom';
import Cards from '../components/Cards';


const Home = () => {
    const foods = useLoaderData();
    const sortedFoods = [...foods].sort((a, b) => (b?.purchase || 0) - (a?.purchase || 0));
    return (
        <div>
            <Banner></Banner>


            <div className='flex items-center justify-center gap-3 mt-6 '>
                <div className='h-px flex-grow bg-[#3b2616]'>
                </div>
                <div>
                    <p className="text-center text-4xl font-bold px-5 shadow-md bg-[url('https://i.pinimg.com/236x/6b/38/ef/6b38ef66e69c53fc92a56766ff56adff.jpg')] bg-blend-overlay bg-opacity-90 bg-[#92501e] text-white py-2" >Offering You a Variety of Cuisines with the Best Taste.</p>
                </div>
                <div className='h-px flex-grow bg-[#3b2616]'>
                </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 p-4 text-center text-3xl "
            >
                <div className="bg-[#010535] text-white p-4 rounded shadow col-span-2 row-span-2 bg-[url('https://i.pinimg.com/474x/14/17/73/141773de185b5bc4db2529935143e64f.jpg')] bg-blend-overlay bg-opacity-60 flex justify-center items-center tracking-widest">
                    Italian
                </div>
                <div className="bg-[url('https://i.pinimg.com/236x/41/17/0d/41170d7d794d4b0073014535b40b8a6a.jpg')] bg-blend-overlay bg-opacity-70 bg-[#1a500d] text-white p-4 rounded shadow col-span-1 flex justify-center items-center  tracking-widest min-h-[200px]">
                    Mexican
                </div>
                <div className="bg-[url('https://i.pinimg.com/236x/16/92/b3/1692b3193ce168983c05e8f42b2997c6.jpg')] bg-blend-overlay bg-opacity-70 bg-[#340909] text-white p-4 rounded shadow col-span-1 flex justify-center items-center  tracking-widest">
                    Indian
                </div>
                <div className="bg-[url('https://i.pinimg.com/474x/0c/61/af/0c61af4d4fdf43f21a7164e948d8f46a.jpg')] bg-blend-overlay bg-opacity-70 bg-[#615e0d]   text-white p-4 rounded shadow col-span-2 row-span-2 flex justify-center items-center tracking-widest">
                    Thai
                </div>
                <div className="bg-[url('https://i.pinimg.com/236x/23/4d/bf/234dbf6de8c8e9c33f39a88898a9ea21.jpg')] bg-blend-overlay bg-opacity-90 bg-[#6a107e] text-white p-4 rounded shadow col-span-2 row-span-2 flex justify-center items-center tracking-widest">
                    Japanese
                </div>
                <div className="bg-[url('https://i.pinimg.com/474x/69/7a/a5/697aa5b4be9431d7537e9212f24db0f5.jpg')] bg-blend-overlay bg-opacity-90 bg-[#0f1179a5] text-white p-4 rounded shadow col-span-2  flex justify-center items-center tracking-widest min-h-[200px]">
                    French
                </div>
                <div className="bg-[url('https://i.pinimg.com/474x/b2/49/38/b24938a1820694a768f2e4b6bfc7a9c9.jpg')] bg-blend-overlay bg-opacity-90 bg-[#6a107e] text-white p-4 rounded shadow col-span-4  flex justify-center items-center tracking-widest min-h-[200px]">
                    American
                </div>
            </div>




            <div>
                <p className='text-4xl text-center mt-7 font-semibold'>Our Top Selling Foods</p>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-7 w-11/12 mx-auto px-3 place-items-center'>
                {
                    sortedFoods.slice(0, 6).map((item) => <Cards key={item._id} item={item}></Cards>)
                }
            </div>

            <div className='mx-auto w-full text-center mb-7'>
                <Link className='btn btn-wide rounded-3xl bg-[#3b2616] text-white' to={'/all'}>See all Food items</Link>
            </div>


            <div class="bg-gradient-to-b from-[#f1bd94] to-yellow-100 mb-6 py-12 px-6">
                <h2 class="text-4xl font-extrabold text-center text-white mb-8 tracking-widest">What Our Customers Say</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                        <img src="https://i.pinimg.com/236x/c7/9a/37/c79a37e13ef14be556b51143bcbb1b01.jpg" alt="Customer" class="w-16 h-16 rounded-full object-cover border-2 border-yellow-500 mb-4" />
                        <p class="text-lg font-semibold text-gray-800">"The pasta was heavenly!"</p>
                        <div class="text-yellow-500 flex mt-2">
                            ⭐⭐⭐⭐⭐
                        </div>
                        <p class="mt-4 text-gray-600">- Alex Morgan</p>
                    </div>
                    <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                        <img src="https://i.pinimg.com/236x/c1/75/45/c17545ee36936c7793de49b35e310527.jpg" alt="Customer" class="w-16 h-16 rounded-full object-cover border-2 border-yellow-500 mb-4" />
                        <p class="text-lg font-semibold text-gray-800">"Quick delivery and fresh ingredients!"</p>
                        <div class="text-yellow-500 flex mt-2">
                            ⭐⭐⭐⭐☆
                        </div>
                        <p class="mt-4 text-gray-600">- Jamie Lee</p>
                    </div>
                    <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                        <img src="https://i.pinimg.com/474x/8d/e1/b5/8de1b545ff3230fa6e780b0ac21e7eca.jpg" alt="Customer" class="w-16 h-16 rounded-full object-cover border-2 border-yellow-500 mb-4" />
                        <p class="text-lg font-semibold text-gray-800">"Affordable and delicious meals!"</p>
                        <div class="text-yellow-500 flex mt-2">
                            ⭐⭐⭐⭐⭐
                        </div>
                        <p class="mt-4 text-gray-600">- Taylor Adams</p>
                    </div>
                    <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                        <img src="https://i.pinimg.com/474x/68/1f/2f/681f2fab9f63d08397a09bd4558aeba0.jpg" alt="Customer" class="w-16 h-16 rounded-full object-cover border-2 border-yellow-500 mb-4" />
                        <p class="text-lg font-semibold text-gray-800">"Best sushi I've ever had!"</p>
                        <div class="text-yellow-500 flex mt-2">
                            ⭐⭐⭐⭐⭐
                        </div>
                        <p class="mt-4 text-gray-600">- Chris Evan</p>
                    </div>
                    <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                        <img src="https://i.pinimg.com/474x/d4/e1/4d/d4e14d7281d587c2a1faa35db49c0d23.jpg" alt="Customer" class="w-16 h-16 rounded-full object-cover border-2 border-yellow-500 mb-4" />
                        <p class="text-lg font-semibold text-gray-800">"Exceptional customer service!"</p>
                        <div class="text-yellow-500 flex mt-2">
                            ⭐⭐⭐⭐⭐
                        </div>
                        <p class="mt-4 text-gray-600">- Riley Brooks</p>
                    </div>
                    <div class="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                        <img src="https://i.pinimg.com/474x/15/52/39/1552393c589b675c218cc84f2b4d4459.jpg" alt="Customer" class="w-16 h-16 rounded-full object-cover border-2 border-yellow-500 mb-4" />
                        <p class="text-lg font-semibold text-gray-800">"I can’t get enough of their desserts!"</p>
                        <div class="text-yellow-500 flex mt-2">
                            ⭐⭐⭐⭐☆
                        </div>
                        <p class="mt-4 text-gray-600">- Sam Parker</p>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Home;