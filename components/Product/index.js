import React from 'react'
import P1 from '../../public/assets/P1.png'
import styles from './product.module.css'
import Image from 'next/image'

function Product() {
  return (
    <div className='max-w-[1000px] mx-auto pt-[30px]'>
      <h1 className='text-[#c4c4c4] text-center text-lg pb-[43px]'>
        {' '}
        OTHER GREENBLES PRODUCTS
      </h1>

      <div className='flex gap-[32px] sm:flex-col'>
        <div className='basis-1/3 shadow-xl'>
          <Image src={P1} alt='product-1' className='w-full' sizes='100%' />

          <div className={` py-[30px]  ${styles.border} text-center`}>
            <h2 className='text-tahiti-green text-[22px] pb-[0px]'>
              Agritourism
            </h2>
            <p className='text-[#c4c4c4]'> learn more</p>
          </div>
        </div>
        <div className='basis-1/3 shadow-xl'>
          <Image src={P1} alt='product-1' className='w-full' sizes='100%' />

          <div className={` py-[30px]  ${styles.border} text-center`}>
            <h2 className='text-tahiti-green text-[22px] pb-[0px]'>
              {' '}
              Agritourism
            </h2>
            <p className='text-[#c4c4c4]'> learn more</p>
          </div>
        </div>

        <div className='basis-1/3 shadow-xl'>
          <Image src={P1} alt='product-1' className='w-full' sizes='100%' />

          <div className={` py-[30px]  ${styles.border} text-center`}>
            <h2 className='text-tahiti-green text-[22px] pb-[0px]'>
              {' '}
              Agritourism
            </h2>
            <p className='text-[#c4c4c4]'> learn more</p>
          </div>
        </div>
      </div>

      <div className='flex py-[66px] gap-[32px] sm:flex-col'>
        <div className='basis-1/3 shadow-xl'>
          <Image src={P1} alt='product-1' className='w-full' sizes='100%' />

          <div className={` py-[30px]  ${styles.border} text-center`}>
            <h2 className='text-tahiti-green text-[22px] pb-[0px]'>
              Agritourism
            </h2>
            <p className='text-[#c4c4c4]'> learn more</p>
          </div>
        </div>
        <div className='basis-1/3 shadow-xl'>
          <Image src={P1} alt='product-1' className='w-full' sizes='100%' />

          <div className={` py-[30px]  ${styles.border} text-center`}>
            <h2 className='text-tahiti-green text-[22px] pb-[0px]'>
              Agritourism
            </h2>
            <p className='text-[#c4c4c4]'> learn more</p>
          </div>
        </div>

        <div className='basis-1/3 shadow-xl'>
          <Image src={P1} alt='product-1' className='w-full' sizes='100%' />

          <div className={` py-[30px]  ${styles.border} text-center`}>
            <h2 className='text-tahiti-green text-[22px] pb-[0px]'>
              Agritourism
            </h2>
            <p className='text-[#c4c4c4]'> learn more</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
