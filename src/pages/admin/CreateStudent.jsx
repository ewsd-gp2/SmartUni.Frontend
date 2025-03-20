import HeaderTitle from "../../components/common/HeaderTitle.jsx";

export const CreateStudent = () => {
    return(
        <div>
            <div>
                <HeaderTitle title='Create Tutor Account'/>
                <form>
                    <div className='grid gap-6 mb-6 md:grid-cols-2 w-5xl mt-10'>
                        <div>
                            <label
                                htmlFor='name'
                                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                            >
                                Full Name
                            </label>
                            <input
                                type='text'
                                id='name'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                placeholder='Full Name'
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor='gender'
                                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                            >
                                Gender
                            </label>
                            <select
                                id='gender'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            >
                                <option value='Male'>Male</option>
                                <option value='Female' selected>
                                    Female
                                </option>
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor='major'
                                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                            >
                                Major
                            </label>
                            <select
                                id='major'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            >
                                <option value='Computing' selected>
                                    Computing
                                </option>
                                <option value='InformationSystems'>{`Computing (Information Systems)`}</option>
                                <option value='Networking'>{`Computing (Network Systems)`}</option>
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor='email'
                                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                            >
                                Email Address
                            </label>
                            <input
                                type='text'
                                id='email'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                placeholder='xxx@gmail.com'
                                pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor='phoneNumber'
                                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                            >
                                Phone Number
                            </label>
                            <input
                                type='text'
                                id='phoneNumber'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                placeholder='+959xxxx'
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor='visitors'
                                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                            >
                                Password
                            </label>
                            <input
                                type='text'
                                id='password'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                placeholder=''
                                required
                            />
                        </div>
                        <div className='md:col-start-2 flex justify-end gap-5 mt-10'>
                            <button

                                type='submit'
                                className='text-white w-68 bg-[#11a186] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                            >
                                Register
                            </button>
                            <button
                                type='cancel'
                                className=' bg-gray-200 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}