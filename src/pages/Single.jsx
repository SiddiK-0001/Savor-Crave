
import { Link, useLoaderData } from 'react-router-dom';



const Single = () => {
    const item = useLoaderData();




    return (
        <div>

            <div className="bg-cover bg-center bg-[url('https://i.pinimg.com/236x/58/b3/a8/58b3a8a6900de7c174851d9b10673cd9.jpg')] bg-blend-overlay bg-black bg-opacity-70 min-h-[50vh] flex flex-col items-center justify-center px-4" >
                <p className='text-5xl text-center mt-7 font-semibold text-white'> Food<span className='text-6xl text-[#ce864f]'>Details </span> </p>

                <p className="text-lg text-gray-300 mt-4 tracking-widest text-center mb-28">
                    Detailed information to help you make an informed purchase decision.
                </p>

            </div>



            <div className="md:w-1/2 w-3/4 mx-auto -mt-28 mb-10 bg-white border border-[#CEA17E] rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-full rounded-t-lg h-48 object-cover"
                />

                <div className="p-4">
                    <h2 className="text-3xl font-bold text-[#90613d]">{item.name}</h2>
                    <p className="text-gray-600 text-sm mt-2">{item.description}</p>

                    <div className='flex justify-between items-start flex-col md:flex-row gap-3'>
                        <div >
                            <ul className="mt-3 text-gray-800 text-md space-y-2">
                                <li>
                                    <strong>Category:</strong> {item.category}
                                </li>
                                <li>
                                    <strong>Price:</strong> ${item.price}
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
                                <li>
                                    <strong>Purchase Count:</strong> {item?.purchase || 0}
                                </li>
                            </ul>
                        </div>

                        <div>
                            <button className='btn btn-xs mt-4  rounded-3xl bg-[#ebc7ac7d] border border-[#CEA17E] mr-1 text-sm '> <strong>Available Quatity:</strong>{item.quantity}</button>
                            <button className='btn btn-xs mt-4  rounded-3xl bg-[#ebc7ac7d] border border-[#CEA17E]'>Cash on Delivery</button>
                            <ul className="mt-3 text-gray-800 text-md space-y-1">
                                <li>
                                    <strong>Origin:</strong> {item?.origin}
                                </li>
                                <li>
                                    <ul className="mt-3 text-gray-800 text-md space-y-1">
                                        <p><strong>Key Ingridients:</strong></p>
                                        {
                                            item?.ingredients?.map((i, idx) => <li key={idx} className='ml-6'><strong>{idx + 1}.</strong>{i}</li>)
                                        }
                                    </ul>
                                </li>


                            </ul>
                        </div>


                    </div>

                    <div>
                    </div>
                    <Link to={`/purchase/${item._id}`}>
                        <button className="w-full mt-4 py-2 bg-[#CEA17E] text-white rounded-lg font-semibold hover:bg-[#b78965] transition-colors duration-300">
                            Purchase
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Single;