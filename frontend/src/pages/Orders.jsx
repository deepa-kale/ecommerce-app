import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {

  const { backendURL, token, currency} = useContext(ShopContext);

  const [orderData, setorderData] = useState([])

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }

      const response = await axios.post(backendURL + '/api/order/userorders',{},{headers:{token}})
      console.log('Order response:', response.data);
      if (response.data.success) {
        setorderData(response.data.orders)
      }

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    loadOrderData()
  },[token])

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'}/>
      </div>

      <div>
        {orderData.map((order, index) => (
          <div key={index} className='mb-8'>
            <div className='flex justify-between items-center mb-4'>
              <p className='text-sm text-gray-700'>Order Date: {new Date(order.date).toLocaleDateString()}</p>
              <p className='text-sm text-gray-700'>Payment: {order.paymentMethod}</p>
            </div>
            {order.items.map((item, itemIndex) => (
              <div key={itemIndex} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                <div className='flex items-start gap-6 text-sm'>
                  <img className='w-16 sm:w-20' src={item.images?.[0]} alt={item.name} />
                  <div>
                    <p className='sm:text-base font-medium'>{item.name}</p>
                    <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                      <p className='text-lg'>{currency}{item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Size: {item.size}</p>
                    </div>
                  </div>
                </div>
                <div className='md:w-1/2 flex justify-between'>
                  <div className='flex items-center gap-2'>
                    <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                    <p className='text-sm md:text-base'>{order.status}</p>
                  </div>
                  <button onClick={loadOrderData} className='bg-black border px-4 py-2 text-white font-medium rounded-sm'>Track Order</button>
                </div>
              </div>
            ))}
            <div className='mt-4 text-right'>
              <p className='text-lg font-medium'>Total: {currency}{order.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
