import React from 'react'
import { ShopContext } from '../context/ShopContext';
import {Link} from 'react-router-dom'
import { useContext } from 'react';

const ProductItem = ({id,images,name,price}) => {
    const {currency} = useContext(ShopContext);

    console.log('ProductItem received:', { id, images, name, price });
    console.log('First image URL:', images?.[0]);

    return (
        <Link className='text-gray-700 cursor-pointer' to={`/products/${id}`}>
            <div className='overflow-hidden'>
                <img className='hover:scale-110 transition ease-in-out' src={images?.[0]} alt={name} />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
        </Link>
    )
}

export default ProductItem
