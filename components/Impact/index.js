import React from 'react'
import I1 from '../../public/assets/Impact-1.png'
import Image from 'next/image'

function SocialImpact() {
  return (
    <div className='max-w-[1200px] lg:mx-[10%] md:mx-0 pt-[71px] pb-[146.22px] pr-[10%]  sm:pr-0 sm:mx-0 sm:max-w-full sm:pb-8 '>
      <div className='bg-tahiti-uni max-w-[60%] ml-auto py-[60px] pr-[70px] rounded-xl relative sm:max-w-full sm:p-4 md:max-w-[80%] md:ml-auto'>
        <div className='ml-[35%] w-[65%] sm:ml-0 sm:w-full sm:text-center md:ml-[40%]'>
          <h1 className='font-semibold text-3xl pb-[26px] text-tahiti-green'>
            Donating for Social Impact
          </h1>
          <p className='font-semibold text-lg  pb-[11px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='font-semibold text-lg  pb-[11px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className='font-semibold text-lg pb-[11px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <h2 className=' font-bold text-[20px] leading-[12px] text-tahiti-green'>
            AMARA ODENIGBO
          </h2>
        </div>

        <div className='absolute lg:top-[35%] md:top-[55%] left-[-90px] sm:static sm:flex sm:justify-center sm:mt-8 md:left-[-90px] lg:left-[-70px]'>
          <Image src={I1} alt='impact-image' className='rounded-xl' />
        </div>
      </div>
      {/* <div className='flex justify-center'>
        <div>
          <div className='bg-tahiti-uni max-w-[1000px]  pt-[78px] pb-[47px] relative'>
            <div className='max-w-[344px] mx-auto'>
              <h1 className='font-[350] text-[20px] pb-[26px] text-tahiti-green'>
                {' '}
                Donating for Social Impact{' '}
              </h1>
              <p className='font-[300] text-md  pb-[21px]'>
                {' '}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className='font-[300] text-md  pb-[21px]'>
                {' '}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className='font-[300] text-md pb-[30px]'>
                {' '}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <h2 className=' font-gbold text-[20px] leading-[12px] text-tahiti-green'>
                {' '}
                AMARA ODENIGBO{' '}
              </h2>

              <div className='absolute top-[153px] left-[-130px]'>
                <Image src={I1} alt='impact-image' />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default SocialImpact
