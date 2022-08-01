import React from 'react'
import heroImg from '../../public/assets/hero-img.png'
import Image from 'next/image'
function Hero() {
  return (
    <div className='container mx-auto'>
      <div className='max-w-[1000px] mx-auto'>
        <div className='flex flex-row sm:w-full'>
          <div className='basis-4/6 pt-[35px] sm:basis-[100%] sm:text-center sm:pt-0'>
            <h1 className='text-[40px] font-bold leading-[44px] pb-[26px] text-tahiti-secondary sm:text-[34px]'>
              Distant learning <br />
              for agripreneurship
            </h1>

            <p className='leading-[24px] text-[20px] font-gbold text-tahiti-secondary max-w-[389px] pb-[1rem]'>
              Learning is a life-long journey that in fact we never find the
              terminate stop. Stop searching, enjoy the process.
            </p>

            <div>
              <button className='w-[160px] h-[40px] text-[#ffffff] bg-tahiti font-gbold text-[14px] leading-[17px]'>
                Explore
              </button>
            </div>
          </div>
          <div className='basis-2/6 sm:hidden'>
            <Image src={heroImg} className='pb-[52px]' alt='hero-img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
