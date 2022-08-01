import React from 'react'
import styles from './agro.module.css'
import A1 from '../../public/assets/agr-1.png'
import video from '../../public/assets/video.png'
import icon1 from '../../public/assets/carrot.svg'
import icon2 from '../../public/assets/tractor.svg'
import icon3 from '../../public/assets/corn2.svg'
import Image from 'next/image'

function Agro() {
  return (
    <div className='container mx-auto bg-tahiti-uni min-h-[1004px] pt-[78px] relative rounded-br-[50%] rounded-bl-[50%] scale-x-150 md:px-5 md:mb-40 sm:mb-40 lg:mb-64 lg:px-0 sm:scale-x-[280%]'>
      <div className='absolute top-[0]'>
        <Image src={icon1} alt='icon' />
      </div>

      <div className='absolute top-[172px] right-[42px]'>
        <Image src={icon2} alt='icon' />
      </div>

      <div className='scale-x-75 sm:scale-x-[40%] mx-auto'>
        <div className=''>
          <h1 className='pb-[10px] text-lg text-[#c4c4c4] text-center sm:text-base'>
            MAXIMIZE YOUR POTENTIALS AND FINANCES{' '}
          </h1>
          <h2 className='text-tahiti-secondary text-3xl max-w-[550px] text-center mx-auto sm:text-xl'>
            Learn the secrets of Agripreneurship, these people have got the
            key.​
          </h2>
        </div>

        <div className='max-w-[1000px] mx-auto'>
          <div className='flex gap-[0px] py-[25px] sm:flex-col'>
            <div className='basis-1/3'>
              <div className=''>
                <h1 className='text-center text-tahiti-green text-4xl font-[700] pb-[12px]'>
                  3,091
                </h1>
                <p className=' font-[350] text-[#5b5b5b] text-center text-md'>
                  REGISTERED ENROLL
                </p>
              </div>
            </div>
            <div className='basis-1/3'>
              <div className=''>
                <h1 className='text-center text-tahiti-green text-4xl font-[700] pb-[12px]'>
                  1,927
                </h1>
                <p className=' font-[350] text-[#5b5b5b] text-center text-md'>
                  FARMERS NETWORK
                </p>
              </div>
            </div>
            <div className='basis-1/3'>
              <div className=''>
                <h1 className='text-center text-tahiti-green text-4xl font-[700] pb-[12px]'>
                  100%
                </h1>
                <p className=' font-[350] text-[#5b5b5b] text-center text-md'>
                  SUCCESS RATE
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-[1000px] mx-auto'>
          <div className='flex gap-[25px] py-[50px] sm:flex-col sm:py-[25px] md:px-4 '>
            <div className='bg-[#ffffff] basis-1/2 shadow-9xl p-8 sm:p-4 sm:justify-between sm:m-3 rounded-xl '>
              <div className='flex items-center'>
                <Image src={A1} className='' alt='agric' />
                <h1 className='text-tahiti-green pl-4'> AMARA ODENIGBO</h1>
              </div>
              <div className='mt-2'>
                <h3 className='text-[16px]'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </h3>
              </div>
            </div>

            <div className='bg-[#ffffff] basis-1/2 shadow-9xl p-8 sm:p-4 sm:justify-between sm:m-3 rounded-xl '>
              <div className='flex items-center'>
                <Image src={A1} className='' alt='agric' />
                <h1 className='text-tahiti-green pl-4'> AMARA ODENIGBO</h1>
              </div>
              <div className='mt-2'>
                <h3 className='text-[16px]'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </h3>
              </div>
              {/* <div className='w-[15%]'>
                <Image src={A1} className='' alt='agric' />
              </div>
              <div className='w-[85%]'>
                <h3 className='text-[16px]  pb-[33px]'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </h3>
                <h1 className='text-tahiti-green'> AMARA ODENIGBO</h1>
              </div> */}
            </div>
          </div>

          <h1 className='text-[14px] text-[#5b5b5b] text-center pt-2 pb-[11px]'>
            CREATE FINANCIAL WEALTH THROUGH AGRICULTURE
          </h1>
          <h2 className='text-tahiti-green text-[33px] leading-[30px] tracking-[-0.01em] pb-[52px] sm:pb-[100px] text-center'>
            The Birth of Agrocommodity
          </h2>

          <div className='max-w-[762px] relative mx-auto z-[0]'>
            <div className='absolute top-[-59px] left-[-71px] z-[4]'>
              <Image src={icon3} alt='corn image' />
            </div>
            <div className='absolute md:left-[15%] md:right-[15%] sm:left-[5%] sm:right-[5%] sm:top-[-5rem] lg:left-[5%] lg:right-[5%]'>
              <Image src={video} alt='video section' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agro
