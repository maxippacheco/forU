import { AiOutlineComment, AiOutlineDislike, AiOutlineLike, AiOutlineUserAdd, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { GrFormAdd } from 'react-icons/gr';
import { AppLayout } from '../layouts';

export default function Home() {

  return (
    <AppLayout title="Welcome to For U">

      <div className='w-full md:h-auto h-auto flex flex-row'>
        <div className="w-14 h-14 fixed z-10 bottom-0 right-0 m-5 rounded-full bg-sky-600 flex items-center justify-center hover:bg-sky-700 cursor-pointer">
          <GrFormAdd className='text-3xl' style={{ color: 'white'}} />
        </div>

        <div className='hidden lg:flex w-1/4 bg-gray-100 h-screen sticky'>
          <div className='h-1/2 w-full flex flex-col justify-center items-center'>
            <div className='w-11/12 h-auto bg-white p-3 rounded-lg my-3'>
              <h2 className='text-center'>Your chats</h2>
              <div className='flex flex-row items-center justify-between'>
                {/* IMAGE */}
                <div className='flex flex-row items-center'>
                  <div className='w-10 h-10 bg-gray-600 mr-2 rounded-full' />
                  <span>@thereal_geek</span>
                </div>
                <AiOutlineComment className='xl:flex hidden text-2xl' />
              </div>
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className='grow md:w-2/4 h-full'>
          <div className='grow m-2 h-auto bg-gray-200 rounded-xl'>
            <div className='p-2 flex items-center'>
              <div className='w-16 h-16 bg-gray-400 rounded-full' />
              <div className='flex grow justify-between'>
                <div className='flex sm:flex-row flex-col'>
                  <span className='mx-2 text-gray-800'>@thereal_geek</span>
                  <span className='mx-2 text-gray-800 text-sm md:text-base'>Posted in <span className='text-sky-700'>RealGamers_arg</span></span>
                </div>
                <span className='mx-2 text-gray-800 text-sm'>12/02/23</span>
              </div>
            </div>
            <div className='md:px-11 px-5 py-3 text-justify bg-gray-200 rounded-b-xl mb-2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis animi laudantium quis Lorem ipsum dolor sit amet consectetur adipisicing elit. Error natus neque, qui iste voluptates, voluptas perspiciatis dolorem odio repellat repudiandae dolore at, aliquam pariatur excepturi ab voluptatum praesentium tempora suscipit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ex ullam voluptate sint possimus autem suscipit eos laboriosam dolore iste numquam deleniti similique quas, labore vel, porro doloribus impedit repellat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo minima hic labore tempore provident nisi veritatis officiis est! Eaque maiores earum et ex voluptate soluta dolor ipsum at excepturi nemo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora animi fugiat saepe impedit ut ipsam dolor adipisci, libero error, ad, quod eos maxime. Dolore, quod. Molestias eaque assumenda quod consequatur!
            </div> 
            <div className='w-full flex flex-row justify-between px-11 pb-3'>
              <div className='flex flex-row'>
                <AiOutlineLike className="text-3xl mr-3 text-gray-800" />
                <AiOutlineDislike className="text-3xl text-gray-800" />
              </div>
              <div>
                <AiOutlineComment className="text-3xl text-gray-800" />
              </div>
            </div>
          </div>
        </div>
        <div className='hidden lg:flex w-1/4 bg-gray-100 h-screen sticky'>
          <div className='h-1/2 w-full flex flex-col justify-center items-center'>
            <div className='w-11/12 h-auto bg-white p-3 rounded-lg my-3'>
              <h2 className='text-center'>Online Users</h2>
              <div className='flex flex-row items-center justify-between'>
                {/* IMAGE */}
                <div className='flex flex-row items-center'>
                  <div className='w-10 h-10 bg-gray-600 mr-2 rounded-full' />
                  <span>@thereal_geek</span>
                </div>
                <AiOutlineUserAdd className='xl:flex hidden text-2xl' />
              </div>
            </div>

            <div className='w-11/12 h-auto bg-white p-3 rounded-lg'>
              <h2 className='text-center'>Recommended foros</h2>
              <div className='flex flex-row items-center justify-between'>
                {/* IMAGE */}
                <div className='flex flex-row items-center'>
                  <div className='w-10 h-10 bg-gray-600 mr-2 rounded-full' />
                  <span>f/software_engineering</span>
                </div>
                <AiOutlineUsergroupAdd className='xl:flex hidden text-2xl' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
