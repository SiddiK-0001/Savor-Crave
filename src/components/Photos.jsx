import React from 'react';

const Photos = ({item}) => {
    return (
        <div>

            <img className='w-72 h-64 object-cover' src={item.image_url} alt="" />
            
        </div>
    );
};

export default Photos;