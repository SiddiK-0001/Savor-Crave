import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

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

   


    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: "#d33",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {

                    // console.log(_id)

                    fetch(`http://localhost:5000/delete/${_id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Food Item has been deleted.",
                                    icon: "success"
                                });
                                const remaining = items.filter(i => i._id !== _id)
                                setitems(remaining)
                            }

                        })
                }
            });
    }

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

                        <th className="hidden md:table-cell">No.</th>
                        <th>Name</th>
                        <th className="hidden md:table-cell">Description</th>
                        <th >Quantity</th>
                        <th >Price per Item</th>

                    </tr>
                </thead>
                <tbody >

                    {items.map((item, index) => (
                        <tr key={index}>
                            <th className="hidden md:table-cell">
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar hidden md:flex">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={item.image_url}
                                                alt="Equipment"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.foodName}</div>
                                        
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

                            <td >
                                {item?.quantity}</td>
                            <td >${item?.price}</td>

                            <td>
                                <button onClick={()=>handleDelete(item._id)} className="btn btn-sm rounded-full bg-[#6b4c35] text-white">
                                    X
                                </button>
                            </td>
                        </tr>
                    ))}


                </tbody>


            </table>
            
        </div>
    );
};

export default Orders;