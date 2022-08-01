import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
    <div className=' bg-[#ffffff]'>
      <div className='lg:pt-[51px] lg:pb-[54px] md:py-[15px] sm:py-12 lg:px-[9%] sm:pb-[15px]'>
        <div>
          <div className='max-w-[1187px] mx-auto md:px-10 lg:px-0 py-[43px]'>
            <div className='flex justify-between pt-5 sm:flex-col'>
              <div className='max-w-[40%] sm:ml-4 sm:max-w-full'>
                <h1 className='text-xl leading-[19px] font-bold pb-[20px] sm:pb-3 text-tahiti'>
                  OFFICE ADDRESS
                </h1>
                <p className='pb-5 text-[#323232] text-base font-semibold leading-[22px] sm:pr-6'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Doloribus amet eveniet illum itaque ipsam
                  eligendi. Perspiciatis natus voluptatibus facilis aliquam
                  sapiente esse vel velit officiis odio. Eaque ullam molestias
                  veritatis.
                </p>
              </div>

              <div className='sm:ml-4 sm:my-4'>
                <h2 className='text-xl  font-bold pb-[20px] leading-[19px] sm:pb-0 text-tahiti'>
                  NAVIGATION
                </h2>

                <ul>
                  <li className='text-base font-normal leading-[22px]'>
                    {' '}
                    Home
                  </li>
                  <li className='text-base font-normal leading-[22px]'>
                    About Us
                  </li>

                  <li className='text-base font-normal leading-[22px]'>
                    Products
                  </li>
                  <li className='text-base font-normal leading-[22px]'>
                    Social impact
                  </li>
                </ul>
              </div>

              <div className='sm:ml-4 sm:my-4'>
                <h2 className='text-xl  font-bold pb-[20px] leading-[19px] sm:pb-0 text-tahiti'>
                  INFORMATION
                </h2>

                <ul>
                  <li className='text-base font-normal leading-[22px]'>
                    Contact
                  </li>
                  <li className='text-base font-normal leading-[22px]'>
                    Terms of use
                  </li>
                  <li className='text-base font-normal leading-[22px]'>
                    Privacy Policy
                  </li>
                </ul>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className='border border-transparent border-t-black border-opacity-20 lg:px-[9%] md:px-[5%] flex items-center justify-between sm:flex-col sm:pb-4 sm:px-[5%]'>
        <div className='py-4 text-base md:w-[65%] '>
          <p className='pt-0 pb-0 m-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quas non sequi.
          </p>
          <p className='pt-0 pb-0 m-0'>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='flex items-center'>
          <FaFacebook size={25} className='text-tahiti mr-4' />
          <FaWhatsapp size={25} className='text-tahiti mr-4' />
          <FaTwitter size={25} className='text-tahiti mr-4' />
          <FaInstagram size={25} className='text-tahiti' />
        </div>
      </div>
    </div>
  )
}

export default Footer
