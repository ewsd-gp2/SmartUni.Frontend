import SideBar from "../components/SideBar";
import Container from "../components/Container";
import HeaderTitle from "../components/common/HeaderTitle";
import SearchInput from "../components/common/SearchInput";
import { GrAttachment } from "react-icons/gr";

const Chat = () => {
  return (
    <Container>
      <div className='flex flex-row gap-5 flex-1 ml-5'>
        <div className='flex flex-col w-1/3 gap-5'>
          <HeaderTitle title='Chat' />
          <SearchInput className='mb-6' />
          <div className='border-b-1 border-b-[rgba(0,0,0,0.3)] rounded-b-lg flex flex-row pb-4 gap-5 mt-2'>
            <img
              src='https://wallpapers.com/images/high/professional-profile-pictures-2880-x-1920-xq8yol0nn3qfm0w4.webp'
              className='w-12 h-11 rounded-full'
              alt=''
            />
            <div>
              <p className='text-lg'>John Doe</p>
              <p className='text-md'>Hello Student</p>
            </div>
          </div>
          <div className='border-b-1 border-b-[rgba(0,0,0,0.3)] rounded-b-lg flex flex-row pb-4 gap-5 mt-2'>
            <img
              src='https://wallpapers.com/images/high/professional-profile-pictures-2880-x-1920-xq8yol0nn3qfm0w4.webp'
              className='w-12 h-11 rounded-full'
              alt=''
            />
            <div>
              <p className='text-lg'>John Doe</p>
              <p className='text-md'>Hello Student</p>
            </div>
          </div>
        </div>
        <div className='flex flex-1 flex-col mt-18'>
          <div className='flex flex-row items-center gap-8 border-b-1 border-b-[rgba(0,0,0,0.3)] w-full pb-2 '>
            <img
              src='https://wallpapers.com/images/high/professional-profile-pictures-2880-x-1920-xq8yol0nn3qfm0w4.webp'
              className='w-13 h-12 rounded-full ml-4'
              alt=''
            />
            <p className='text-xl'>John Doe</p>
          </div>
          <div className=' flex flex-1 flex-col mt-6 h-[500px]'>
            <div className='bg-[#11a186] self-start inline-block max-w-[80%] p-2'>
              <p className='text-white'>Hello Sir</p>
            </div>
            <div className='bg-[rgba(17,161,134,0.2)] self-end inline-block max-w-[80%] p-2'>
              <p>Hello Student</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </Container>
  );
};
export default Chat;
