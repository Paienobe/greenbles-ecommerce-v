import logo from '../../public/assets/green-logo.png'
import Image from 'next/image'
import { Button, Drawer, Radio, Space } from 'antd'
import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import Link from 'next/link'

function Header() {
  const [visible, setVisible] = useState(false)
  const [placement, setPlacement] = useState('left')

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <div>
      <Drawer placement='right' onClose={onClose} visible={visible}>
        <div className='flex flex-col space-y-[25px]'>
          <div>
            <Link href='/'>
              <h1 className='leading-[13px] text-base pr-[73px] font-[350] text-secondary cursor-pointer'>
                HOME
              </h1>
            </Link>
          </div>
          <div className='flex items-center pr-[65px]'>
            <div>
              <Link href='/products'>
                <h1 className='leading-[13px] text-base pr-[6px] font-[350] text-secondary'>
                  PRODUCTS
                </h1>
              </Link>
            </div>
            <div>
              {' '}
              <svg
                width='7'
                height='6'
                viewBox='0 0 7 6'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M3.5 6L7 0.585239H0L3.5 6Z' fill='#5B5B5B' />
              </svg>
            </div>
          </div>

          <div className='flex items-center pr-[57px]'>
            <div>
              {' '}
              <h1 className='leading-[13px] text-base pr-[6px] font-[350] text-secondary'>
                {' '}
                IMPACT
              </h1>
            </div>
            <div>
              {' '}
              <svg
                width='7'
                height='6'
                viewBox='0 0 7 6'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M3.5 6L7 0.585239H0L3.5 6Z' fill='#5B5B5B' />
              </svg>
            </div>
          </div>

          <div className='flex items-center pr-[45px]'>
            <div>
              {' '}
              <h1 className='leading-[13px] text-base pr-[6px] font-[350] text-secondary'>
                {' '}
                ABOUT US
              </h1>
            </div>
            <div>
              {' '}
              <svg
                width='7'
                height='6'
                viewBox='0 0 7 6'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M3.5 6L7 0.585239H0L3.5 6Z' fill='#5B5B5B' />
              </svg>
            </div>
          </div>

          <div>
            {' '}
            <h1 className='leading-[13px] text-base  font-[350] text-secondary'>
              {' '}
              CONTACT
            </h1>{' '}
          </div>
        </div>
      </Drawer>
      <div className='container mx-auto '>
        <div className='flex items-center justify-between py-[64px]  px-[30px] md:px-[0%] lg:px-[10%] sm:px-0 sm:py-8'>
          {/* logo */}
          <div className=' md:pr-10 lg:pr-[201.99px]'>
            <Image src={logo} alt='greenbles logo' />
          </div>
          <div className='flex hidden md:flex md:items-center'>
            <div>
              <Link href='/'>
                <h1 className='leading-[13px] text-base lg:pr-[73px] md:pr-[23px] font-[350] text-secondary'>
                  HOME
                </h1>
              </Link>
            </div>
            <div className='flex items-center lg:pr-[65px] md:pr-[25px]'>
              <div>
                <Link href='/products'>
                  <h1 className='leading-[13px] text-base pr-[6px] font-[350] text-secondary'>
                    PRODUCTS
                  </h1>
                </Link>
              </div>
              <div>
                {' '}
                <svg
                  width='7'
                  height='6'
                  viewBox='0 0 7 6'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M3.5 6L7 0.585239H0L3.5 6Z' fill='#5B5B5B' />
                </svg>
              </div>
            </div>

            <div className='flex items-center lg:pr-[57px] md:pr-[27px]'>
              <div>
                {' '}
                <h1 className='leading-[13px] text-base pr-[6px] font-[350] text-secondary'>
                  {' '}
                  IMPACT
                </h1>
              </div>
              <div>
                {' '}
                <svg
                  width='7'
                  height='6'
                  viewBox='0 0 7 6'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M3.5 6L7 0.585239H0L3.5 6Z' fill='#5B5B5B' />
                </svg>
              </div>
            </div>

            <div className='flex items-center lg:pr-[45px] md:pr-[25px]'>
              <div>
                {' '}
                <h1 className='leading-[13px] text-base pr-[6px] font-[350] text-secondary'>
                  {' '}
                  ABOUT US
                </h1>
              </div>
              <div>
                {' '}
                <svg
                  width='7'
                  height='6'
                  viewBox='0 0 7 6'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M3.5 6L7 0.585239H0L3.5 6Z' fill='#5B5B5B' />
                </svg>
              </div>
            </div>

            <div>
              {' '}
              <h1 className='leading-[13px] text-base  font-[350] text-secondary'>
                {' '}
                CONTACT
              </h1>{' '}
            </div>
          </div>
          <div className=' md:hidden'>
            <HiMenuAlt3 className='text-[#000]' onClick={showDrawer} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
