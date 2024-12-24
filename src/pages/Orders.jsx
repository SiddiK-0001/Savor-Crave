import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Orders = () => {
    const {user } = useContext(Authcontext);
    const [items, setitems] = useState([])

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/orders?email=${user.email}`) 
                .then(res => res.json())
                .then(data => setitems(data));
        }
    }, [user]);
    return (
        <div>

<div className='flex items-center justify-center mt-6 '>
                <div className='h-px flex-grow bg-[#CEA17E]'>
                </div>
                <div>
                    <p className="text-center text-4xl font-bold px-3 shadow-md bg-[url('https://i.pinimg.com/236x/6b/38/ef/6b38ef66e69c53fc92a56766ff56adff.jpg')] bg-blend-overlay bg-opacity-90 bg-[#ab7044] text-white py-2">My Orders</p>
                </div>
                <div className='h-px flex-grow bg-[#CEA17E]'>
                </div>
            </div>


            <table className="table">
                {/* head */}
                <thead>
                    <tr>

                        <th>No.</th>
                        <th>Name</th>
                        <th className="hidden md:table-cell">Description</th>
                        <th className="hidden md:table-cell">Quantity</th>
                        <th className="hidden md:table-cell">Price</th>

                    </tr>
                </thead>
                <tbody >

                    {items.map((item, index) => (
                        <tr key={index}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={item.image_url}
                                                alt="Equipment"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.foodName}</div>
                                        <div className="text-sm opacity-50">{item.category}</div>
                                    </div>
                                </div>
                            </td>

                            <td className="hidden md:table-cell">
                                {item?.description}
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    {item.origin}
                                </span>
                            </td>

                            <td className="hidden md:table-cell">
                                {item?.quantity}</td>
                            <td className="hidden md:table-cell">${item?.price}</td>

                            <td>
                                <Link to={`/update/${item._id}`} className="btn bg-[#be8f6a] text-white">
                                    Update
                                </Link>
                            </td>
                        </tr>
                    ))}


                </tbody>


            </table>
            
        </div>
    );
};

export default Orders;