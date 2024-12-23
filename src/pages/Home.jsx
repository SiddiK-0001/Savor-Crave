import React from 'react';
import Banner from '../components/Banner';
import { Link, useLoaderData } from 'react-router-dom';
import Cards from '../components/Cards';


const Home = () => {
    const foods = useLoaderData();
    return (
        <div>
            <Banner></Banner>

            <div>
                <p className='text-4xl text-center mt-7 font-semibold'>Our Top Selling Foods</p>
                
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-7 w-11/12 mx-auto px-3 place-items-center'>
               {
                foods.slice(0,6).map((item)=> <Cards key={item._id} item={item}></Cards>)
               }
            </div>

            <div className='mx-auto w-full text-center mb-7'> 
                <Link className='btn btn-wide rounded-3xl bg-[#3b2616] text-white' to={'/all'}>See all Food items</Link>
            </div>


    
        </div>
    );
};

export default Home;