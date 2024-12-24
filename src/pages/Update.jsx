import React, { useContext } from 'react';

import cooking from '../assets/cooking.png'
import { Authcontext } from '../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const {user} = useContext(Authcontext)
    const item = useLoaderData();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
    
    
        fetch(`http://localhost:5000/food/${item._id}`, {
          method: "PUT",
          headers: {
             "content-Type": "application/json"
             },
          body: JSON.stringify(initialData),
        })
          .then((res) => res.json())
          .then((data) => {
            
        //    console.log(data)
                    if (data.modifiedCount) {
                        Swal.fire({
                            title: "Successfully Updated",
                            icon: "success"
                        });
                        
                    }
          })
          
      };
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center  my-10">
            
                    <div className='flex items-start'>
                    <h2 className="text-4xl font-bold text-center text-[#b07243] mb-6 mr-2">
                      Update Your Food Item
                    </h2>
                    <img className='w-16 -mt-3' src={cooking} alt="" />
                    </div>
                  <form 
                    onSubmit={handleSubmit}
                    className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-2xl"
                  >
            
                    {/* Food Name */}
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Food Name</label>
                      <input
                        type="text"
                        name="name"          
                        defaultValue={item.name}
                        placeholder="Enter food name"
                        className="w-full border rounded-lg p-2"
                        required
                      />
                    </div>
            
                    {/* Food Image */}
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Food Image</label>
                      <input
                        type="url"
                        name="image_url"
                        defaultValue={item.image_url}          
                        placeholder="Enter food image URL"
                        className="w-full border rounded-lg p-2"
                        required
                      />
                    </div>
            
                    {/* Food Category */}
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Food Category</label>
                      <input
                        type="text"
                        name="category"            
                        defaultValue={item.category}
                        placeholder="Enter food category"
                        className="w-full border rounded-lg p-2"
                        required
                      />
                    </div>
            
                    {/* Quantity */}
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Quantity</label>
                      <input
                        type="number"
                        name="quantity"
                        defaultValue={item.quantity}          
                        placeholder="Enter quantity"
                        className="w-full border rounded-lg p-2"
                        required
                      />
                    </div>
            
                    {/* Price */}
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Price($)</label>
                      <input
                        type="number"
                        name="price"
                        defaultValue={item.price}          
                        placeholder="Enter price"
                        className="w-full border rounded-lg p-2"
                        required
                      />
                    </div>     
            
                    {/* Food Origin */}
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Food Origin</label>
                      <input
                        type="text"
                        name="origin"
                        defaultValue={item.origin}            
                        placeholder="Enter country of origin"
                        className="w-full border rounded-lg p-2"
                        required
                      />
                    </div>
            
                    {/* Description */}
                    <div className="mb-6">
                      <label className="block text-gray-700 font-medium mb-2">Description</label>
                      <textarea
                        name="description"
                        defaultValue={item.description}         
                        placeholder="Enter food description"
                        className="w-full border rounded-lg p-2 h-32"
                        required
                      ></textarea>
                    </div>
            
                       {/* Added By */}
                       <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">Added By</label>
                      <input
                        type="text"
                        value={user?.displayName || ""}
                        readOnly
                        className="w-full border rounded-lg p-2 bg-gray-100"
                      />
                      <input
                        type="email"
                        value={user?.email || ""}
                        readOnly
                        className="w-full border rounded-lg p-2 bg-gray-100 mt-2"
                      />
                    </div>
            
                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-[#CEA17E] hover:bg-[#63442d] text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                    >
                      Update Item
                    </button>
                  </form>
                </div>
        </div>
    );
};

export default Update;