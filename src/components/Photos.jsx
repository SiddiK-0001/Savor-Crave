

const Photos = ({item}) => {
    return (
        <div className="w-full">

            <img className='w-full h-72 object-cover' src={item.image_url} alt="" />
            
        </div>
    );
};

export default Photos;