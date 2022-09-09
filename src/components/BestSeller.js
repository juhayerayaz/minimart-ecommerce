import React from 'react';

const BestSeller = ({bestSeller}) => {
    const {name, category, price, pic, type} = bestSeller;
    return (
        <div>
            <img src={pic} alt="" />
            <p className='text-base mt-2 font-semibold font-sans leading-6'>{name}</p>
          <div className='flex justify-between'>
          <p className='text-base mt-2 font-normal font-sans leading-6' style={{color: "#777777"}}>{category}</p>
            <p className='text-base mt-3 font-semibold font-sans leading-6'>${price}</p>
          </div>
             {/* <h1>{type}</h1> */}

        </div>
    );
};

export default BestSeller;