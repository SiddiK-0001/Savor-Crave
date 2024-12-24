import { useContext, useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Authcontext } from "../provider/AuthProvider";
const Photos = ({ item }) => {
    const [open, setOpen] = useState(false);
    const {user} = useContext(Authcontext);
    return (
        <div className="w-full">

            {/* <img className='w-full h-72 object-cover' src={item.image_url} alt="" /> */}


            <div className="relative group overflow-hidden rounded-lg shadow-lg">
                {/* Background Image */}
                <img
                    src={item.image_url}

                    className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110 "
                    onClick={() => setOpen(true)} 
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-2xl text-gray-200 mt-2 px-4 text-center font-semibold">{item?.name}</p>
                    <p className="text-lg text-gray-200 mt-2 px-4 text-center">Price: {item?.price}$</p>
                    <p className="text-md text-gray-200 mt-2 px-4 text-center">{item?.description}</p>
                    <p className="text-sm text-white mt-4 tracking-widest">Added by: {item?.userName}</p>
                </div>
            </div>

            {open && (
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={[{ src: item.image_url }]} 
                />
            )}


        </div >
    );
};

export default Photos;