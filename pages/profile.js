import Image from 'next/image'
import React from 'react'
import logo from '../public/assets/green-logo.png'
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineCreditCard,
  AiOutlinePercentage,
  AiOutlineHeart,
  AiOutlineGift,
  AiOutlineComment,
  AiOutlinePhone,
  AiOutlineMail,
} from 'react-icons/ai'
import { MdOutlineLocationOn } from 'react-icons/md'
import { BsNewspaper } from 'react-icons/bs'
import Header from '@/components/Header'

const Profile = () => {
  const icons = [
    { image: AiOutlineUser, name: 'Profile' },
    { image: AiOutlineShoppingCart, name: 'Orders' },
    { image: AiOutlineCreditCard, name: 'Payment' },
    { image: AiOutlinePercentage, name: 'Royalty Points' },
    { image: AiOutlineHeart, name: 'Wishlist' },
    { image: AiOutlineGift, name: 'Giftcards' },
    { image: AiOutlineComment, name: 'Reviews' },
    { image: BsNewspaper, name: 'Newsletter' },
  ]
  return (
    <div className='bg-tahiti-uni min-h-screen'>
      <div className='bg-white md:px-[5%] lg:px-0 lg:mx-0 sm:px-[4.5%]'>
        <Header />
      </div>
      <div className='py-12 px-[9%] md:px-[5%] lg:px-[9%] flex items-stretch justify-around sm:flex-col sm:px-[4.5%]'>
        <aside className='bg-white w-[16%] p-5 rounded-lg md:w-[25%] lg:w-[16%] sm:w-full sm:mb-4'>
          <Image src={logo} />
          <div className='sm:flex sm:flex-wrap sm:justify-between'>
            {icons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className='flex items-center my-5 font-bold sm:w-[48%] hover:text-tahiti cursor-pointer'
                >
                  <icon.image size={20} />
                  <p className='mb-0 ml-2'>{icon.name}</p>
                </div>
              )
            })}
          </div>
        </aside>

        <main className='w-[80%] md:w-[70%] lg:w-[80%] sm:w-full min-h-full bg-white rounded-lg p-4 text-center'>
          <div className='flex flex-col items-center justify-center'>
            <div className='w-[5rem] h-[5rem] rounded-full flex items-center justify-center bg-tahiti'>
              <AiOutlineUser size={50} color='white' />
            </div>
            <h1 className='font-bold text-2xl py-2'>Orji David</h1>
            <AiOutlinePhone size={20} />
            <p className='py-2 font-semibold text-lg border border-transparent border-b-2 border-b-black border-opacity-20'>
              +2349012343219
            </p>
            <hr />
            <AiOutlineMail size={20} />
            <p className='py-2 font-semibold text-lg border border-transparent border-b-2 border-b-black border-opacity-20'>
              orjidavid@example.com
            </p>
            <hr />
            <MdOutlineLocationOn size={20} />
            <p className='py-2 font-semibold text-lg border border-transparent border-b-2 border-b-black border-opacity-20'>
              8, Sam Smith Street, Lekki, Lagos
            </p>
            <hr />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Profile
