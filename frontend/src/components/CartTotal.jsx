import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {

    const {currency, delivery_fee, getCartAmount} = useContext(ShopContext);

    const formatPrice = (price) => {
        return Number(price).toFixed(2);
    };

    const subtotal = getCartAmount();
    const shipping = Number(delivery_fee);
    const total = subtotal + shipping;

    return (
        <div className='w-full '>
            <div className='text-2xl'>
                <Title text1={'CART'} text2={'TOTAL'}/>
            </div>

            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>{currency}{formatPrice(subtotal)}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Shipping Fee</p>
                    <p>{currency}{formatPrice(shipping)}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <b>Total</b>
                    <b>{currency}{formatPrice(total)}</b>
                </div>
            </div>
        </div>
    )
}

export default CartTotal
