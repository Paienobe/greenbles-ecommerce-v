import Header from '@/components/Header'
import React from 'react'

const Checkout = () => {
  return (
    <div>
      <div className='sm:px-[5%] md:px-[5%] lg:px-[0%]'>
        <Header />
      </div>
      <div className='bg-tahiti-uni py-16 px-10 lg:flex md:flex-col items-start justify-around sm:px-4 sm:flex-col'>
        <div className='lg:w-[65%] md:w-full bg-white p-8 py-4 pb-[4rem] shadow-lg rounded-lg sm:w-full'>
          <form>
            <h1 className='font-bold text-2xl pb-4'>Shopper Checkout</h1>
            <div className='flex flex-wrap justify-between'>
              <div className='w-[48%] mb-4 sm:w-full'>
                <label htmlFor='first_name' className='font-bold'>
                  First Name
                </label>
                <input
                  type='text'
                  name='first_name'
                  placeholder='David'
                  required
                  className='w-full p-4 bg-gray-200 border border-black border-opacity-20 rounded-md block mt-2'
                />
              </div>

              <div className='w-[48%] mb-4 sm:w-full'>
                <label htmlFor='last_name' className='font-bold'>
                  Last Name
                </label>
                <input
                  type='text'
                  name='last_name'
                  placeholder='Orji'
                  required
                  className='w-full p-4 bg-gray-200 border border-black border-opacity-20 rounded-md block mt-2'
                />
              </div>

              <div className='w-[48%] mb-4 sm:w-full'>
                <label htmlFor='phone_number' className='font-bold'>
                  Phone Number
                </label>
                <input
                  type='number'
                  name='phone_number'
                  maxLength={11}
                  placeholder='08013118750'
                  required
                  className='w-full p-4 bg-gray-200 border border-black border-opacity-20 rounded-md block mt-2'
                />
              </div>

              <div className='w-[48%] mb-4 sm:w-full'>
                <label htmlFor='email' className='font-bold'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  placeholder='danielorji@example.com'
                  required
                  className='w-full p-4 bg-gray-200 border border-black border-opacity-20 rounded-md block mt-2'
                />
              </div>
            </div>
            <h1 className='font-bold text-2xl pb-4 pt-8'>Shipping Info</h1>
            <div className='flex justify-between sm:flex-col'>
              <div className='w-[48%] sm:w-full'>
                <label htmlFor='home_address' className='font-bold'>
                  Home Address
                </label>
                <input
                  type='text'
                  name='home_address'
                  required
                  className='block w-[100%] p-4 bg-gray-200 mt-2 border border-black border-opacity-20 rounded-md'
                />
              </div>

              <div className='flex items-center w-[48%] justify-between sm:w-full sm:mt-4'>
                <div className='w-[48%]'>
                  <label htmlFor='state' className='font-bold'>
                    State
                  </label>
                  <select
                    name='state'
                    className='block w-full bg-gray-200 p-4 border border-black border-opacity-20 rounded-md mt-2'
                  >
                    <option value=''></option>
                    <option value='lagos'>Lagos</option>
                    <option value='delta'>Delta</option>
                    <option value='borno'>Borno</option>
                    <option value='osun'>Osun</option>
                    <option value='abia'>Abia</option>
                  </select>
                </div>

                <div className='w-[48%]'>
                  <label htmlFor='city' className='font-bold'>
                    City
                  </label>
                  <select
                    name='city'
                    className='block w-full bg-gray-200 p-4 border border-black border-opacity-20 rounded-md mt-2'
                  >
                    <option value=''></option>
                    <option value='city'>city</option>
                    <option value='city'>city</option>
                    <option value='city'>city</option>
                    <option value='city'>city</option>
                    <option value='city'>city</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className='bg-white lg:w-[25%] md:w-[50%] lg:mt-0 md:mt-6 py-4 px-4 rounded-md shadow-lg sm:w-full sm:mt-6'>
          <h1 className='font-bold text-2xl pb-4'>Summary</h1>
          <div>
            <div className='flex justify-between'>
              <p className='font-bold'>Subtotal</p>
              <p>N330,000</p>
            </div>
            <div className='flex justify-between'>
              <p className='font-bold'>Discount</p>
              <p>N2,000</p>
            </div>
            <div className='flex justify-between'>
              <p className='font-bold'>Shipping</p>
              <p>N2,000</p>
            </div>
            <div className='flex justify-between'>
              <p className='font-bold'>Quantity</p>
              <p>2</p>
            </div>
            <div className='flex justify-between border border-l-0 border-r-0 pt-3'>
              <p className='font-bold'>Total</p>
              <p>N350,000</p>
            </div>
          </div>

          <div className='mt-4'>
            <button className='block w-full p-3 bg-tahiti my-2 text-base font-bold text-white'>
              MAKE PAYMENT
            </button>
            <button className='block w-full p-3 border border-tahiti bg-white my-2 text-base font-bold text-tahiti'>
              MODIFY CART
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
