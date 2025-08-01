import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() =>{
        setLatestProducts(products.slice(0,10));
    },[products])

  return (
    <div className='my-10'>
        <div className='py-8 text-3xl text-center'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs text-gray-600 dark:text-gray-300 sm:text-sm md:text-base'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
            </p>
        </div>

        {/*Rendering Products*/}

        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6'>
            {
                latestProducts.map((item, index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>
      
    </div>
  )
}

export default LatestCollection
