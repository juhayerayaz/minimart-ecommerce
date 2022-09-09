import React, { useEffect, useState } from 'react';
import BestSeller from './BestSeller';
import Header from './Header';

const BestSellers = () => {
    const [bestSellers, setBestSellers] = useState([])
    useEffect(()=>{
       fetch('bestSellers.json')
       .then(res => res.json())
       .then(data => setBestSellers(data))
    }, [bestSellers])
    return (
        <div className='mx-44'>
            <h1 className=' font-medium font-normal text-4xl text-center mb-8 tracking-widest' >Best Sellers</h1>
            <Header></Header>
         <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {
                bestSellers.map(bestSeller =>  <BestSeller bestSeller={bestSeller} key={bestSeller.id}></BestSeller>)
            }
         </div>
        </div>
    );
};

export default BestSellers;