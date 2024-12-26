import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Photos = ({ items }) => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState();

    const handleOpen = (index) => {
        setIndex(index); 
        setOpen(true);          
    };

    return (
        <div className="w-11/12 grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto my-10">
            {items.map((item, index) => (
                <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-lg">
                    {/* Background Image */}
                    <img
                        src={item.image_url}
                        alt={item.name}
                        className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <button
                        onClick={() => handleOpen(index)}
                        className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                    >
                        <div>
                            <p className="text-2xl text-gray-200 mt-2 px-4 text-center font-semibold">{item.name}</p>
                            <p className="text-lg text-gray-200 mt-2 px-4 text-center">Price: {item.price}$</p>
                            <p className="text-md text-gray-200 mt-2 px-4 text-center">{item.description}</p>
                            <p className="text-sm text-white mt-4 tracking-widest">Added by: {item.userName}</p>
                        </div>
                    </button>
                </div>
            ))}

            {/* Lightbox Component */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={items.map((item) => ({ src: item.image_url }))}
                index={index} 
            />
        </div>
    );
};

export default Photos;
