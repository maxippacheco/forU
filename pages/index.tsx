import { useRef, useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler  } from 'react-hook-form';
import Modal from 'react-modal';
import { AiOutlineCloseCircle, AiOutlineComment, AiOutlineDislike, AiOutlineFileAdd, AiOutlineLike, AiOutlineUserAdd, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { GrFormAdd } from 'react-icons/gr';
import { AppLayout } from '../layouts';
import { MyTextInput } from '../components/ui';

const schema = Yup.object({
  community: Yup.string().required(),
  title: Yup.string().required(),
  description: Yup.string().required(),
}).required()

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


interface IFormInputs {
  community: string;
  title: string;
  description: string;
}



export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const fileRef = useRef<any>('');
  
  const { register, formState: { errors }, handleSubmit,  } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  
  const onSubmit: SubmitHandler<IFormInputs> = data => {
    console.log(data);
    
  }
  

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  Modal.setAppElement('#root');


  return (
    <AppLayout title="Welcome to For U">


      <div className='w-full md:h-auto h-auto flex flex-row' id="root">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        // contentLabel="Example Modal"
      >
        <div className='w-screen h-screen flex items-center justify-center'>
          <div className='w-10 h-10 absolute top-10 right-10'>
            <button onClick={ closeModal }>
              <AiOutlineCloseCircle className="text-3xl" />
            </button>
          </div>
          <div className='h-auto md:w-6/12 w-11/12 rounded-lg bg-gray-100'>
            <h1 className='text-center my-3 text-xl'>Create a post</h1>
            <form onSubmit={ handleSubmit( onSubmit )} className="flex flex-col p-5">
              <label htmlFor="title" className='text-lg my-2'>Community:</label>
              <select { ...register('community')} className="p-3">
                <option value="f/ing_sist">f/ing_sist</option>
                <option value="f/ing_ai">f/ing_ai</option>
                <option value="f/ing_agro">f/ing_agro</option>
                <option value="f/ing_mech">f/ing_mech</option>
              </select>
              { errors.community && (<span className='text-red-500 mt-2'>Community is required</span>)}

              <MyTextInput 
                name='title'
                label='Title:'
                register={ register }
                errors={ errors.title }
              />

              <label htmlFor="description" className='text-lg my-2'>Description:</label>
              <textarea 
                { ...register('description')} 
                className={`resize-none p-3 focus:ring-1 focus:outline-none ring-sky-500 rounded-sm mb-2`}
              ></textarea>
              { errors.description && (<span className='text-red-500'>Description is required</span>)}

              <input type="file" className='hidden' ref={fileRef} />
              <div onClick={ () => fileRef.current.click() } className="bg-sky-500 rounded-full hover:bg-sky-600 w-14 h-14 flex items-center justify-center my-3 cursor-pointer">
                <AiOutlineFileAdd className='text-3xl my-5' />
              </div>

              <button type="submit" className='bg-sky-500 p-2 text-white rounded-md hover:bg-sky-600'>Submit</button>

            </form>

          </div>
        </div>
      </Modal>

        <button 
          className="w-14 h-14 fixed z-10 bottom-0 right-0 m-5 rounded-full bg-sky-500 flex items-center justify-center 
          hover:bg-sky-600 cursor-pointer"
          onClick={ openModal }  
        >
          <GrFormAdd className='text-3xl' style={{ color: 'white'}} />
        </button>

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
