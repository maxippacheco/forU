import React from 'react'
import { AiOutlineCloseCircle, AiOutlineFileAdd } from 'react-icons/ai'
import { MyTextInput } from './MyTextInput'
import { useState, useRef } from 'react';
import Modal from 'react-modal';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IModalPost } from '../../interfaces';
import { GrFormAdd } from 'react-icons/gr';
import { yupResolver } from '@hookform/resolvers/yup';
import { modalValidations } from '../../validations';

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

export const HomeModal = () => {
	
  const [modalIsOpen, setIsOpen] = useState(false);
  const fileRef = useRef<any>('');
  
	const { register, formState: { errors }, handleSubmit } = useForm<IModalPost>({
		  resolver: yupResolver(modalValidations)
	});


  const onSubmit: SubmitHandler<IModalPost> = data => {
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
		<>
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
			</>
	)
}
