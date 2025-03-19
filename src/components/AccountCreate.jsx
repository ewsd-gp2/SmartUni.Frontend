import React from 'react'

const AccountCreate = () => {
  return (
   <section>
    <h1 className=' text-2xl font-bold mb-5'>Create Account</h1>
<form className="w-[600px] mx-auto">
  
  <div className='grid grid-cols-2 gap-5'>
  <div className=''>
    <div className='mb-3'>
    <label htmlFor="name" className="block mb-2 font-medium text-gray-900 dark:text-white ">Full Name</label>
    <input type="text" id="name" placeholder='Enter your name' className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>
    <div className='mb-3'>
    <label htmlFor="major" className="block mb-2 font-medium text-gray-900 dark:text-white">Major</label>
    <select id="major" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Major</option>
    <option value="US">Computing</option>
    <option value="CA">Computing and Information System</option>
    <option value="FR">Network</option>
  </select>
    </div>
    <div className='mb-3'>
    <label htmlFor="phone" className="block mb-2 font-medium text-gray-900 dark:text-white ">Full Name</label>
    <input type="number" id="phone" placeholder='Enter your phone number' className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>
  </div>
  <div className=''>
  <div className='mb-3'>
    <label htmlFor="gender" className="block mb-2 font-medium text-gray-900 dark:text-white ">Gender</label>
    <input type="text" id="gender" placeholder='Enter your gender' className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>
    <div className='mb-3'>
    <label htmlFor="email" className="block mb-2 font-medium text-gray-900 dark:text-white ">Email</label>
    <input type="email" id="email" placeholder='Enter your email' className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>
    <div className='mb-3'>
    <label htmlFor="password" className="block mb-2 font-medium text-gray-900 dark:text-white ">Password</label>
    <input type="password" id="gender" placeholder='Enter your password' className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>
  </div>
  </div>
  <div className='mt-5 text-end'>
  <button type="button" className="text-stone-900 border border-stone-400 hover:bg-stone-400 hover:text-white focus:ring-4 focus:ring-stone-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Cancel</button>
  <button type="button" className="text-white border bg-teal-500 hover:bg-teal-600 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>
  </div>
</form>


   </section>
  )
}

export default AccountCreate