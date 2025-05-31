import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-4xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[480px]' src={assets.about} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>We craft timeless, sustainable swimwear designed to last season after season. Each piece is made from premium, biodegradable fabric, thoughtfully created for both quality and environmental care. Our mission is to ensure every part of our brand reflects our commitment to sustainability, durability, and ethical responsibility.</p>
          <p>We believe that fashion should empower both the wearer and the world around them. Founded on the principles of conscious design and mindful living, we are dedicated to creating pieces that look beautiful and last a very long time. </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to create environmentally friendly, long-lasting swimwear that empowers everyone. With a focus on exceptional quality and sustainable materials, our swimwear is crafted to stand the test of time while caring for the planet.</p>
        </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Quality is at the heart of everything we do. From the initial design to the final stitch, every piece undergoes a thorough quality assurance process to ensure durability, comfort, and flawless craftsmanship.  We work closely with skilled artisans and trusted suppliers to maintain the highest standards, so you can enjoy swimwear that not only looks stunning but also performs beautifully.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>We believe that looking and feeling your best should be effortless. That is why we have made convenience a priority in every aspect of our brand — from an easy, seamless shopping experience to fast, reliable delivery right to your doorstep.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Great Customer Service:</b>
          <p className='text-gray-600'>We are here for you, every step of the way. Our dedicated customer service team is committed to providing friendly, responsive, and helpful support whenever you need it. Whether you have questions about sizing, orders, or care instructions, we go above and beyond to ensure your experience with us is smooth and enjoyable. </p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
