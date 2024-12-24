import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({item}) => {
    return (
        <div className="w-full bg-white border border-[#CEA17E] rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
        <img
          src={item.image_url}
          alt={item.name}
          className="w-full rounded-t-lg h-48 object-cover"
        />

        <div className="p-4">
          <h2 className="text-3xl font-bold text-[#90613d]">{item.name}</h2>
          <p className="text-gray-600 text-sm mt-2">{item.description}</p>

        <div className='flex justify-between items-start'>
       <div>
       <ul className="mt-3 text-gray-800 text-sm space-y-1">
            <li>
              <strong>Category:</strong> {item.category}
            </li>
            <li>
              <strong>Price:</strong> ${item.price.toFixed(2)}
            </li>
            <li>
              <strong>Calories:</strong> {item.calories} kcal
            </li>
            <li>
              <strong>Spiciness:</strong> {item.spiciness_level}
            </li>
            <li>
              <strong>Prep Time:</strong> {item.preparation_time}
            </li>
          </ul>
       </div>

           <div>
           <button className='btn btn-xs mt-4  rounded-3xl bg-[#ebc7ac7d] border border-[#CEA17E] mr-1 text-sm '> <strong>Available Quatity:</strong>{item.quantity}</button>
           <button className='btn btn-xs mt-4  rounded-3xl bg-[#ebc7ac7d] border border-[#CEA17E]'>Cash on Delivery</button>
           </div>
           

        </div>

        <div>
        </div>
         <Link to={`/single/${item._id}`}>
         <button className="w-full mt-4 py-2 bg-[#CEA17E] text-white rounded-lg font-semibold hover:bg-[#b78965] transition-colors duration-300">
           See Details
          </button>
         </Link>

        </div>
      </div>
    );
};

export default Cards;