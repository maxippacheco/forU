import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { MyTextInput } from '../../components/ui';

interface FormValues {
	username: string;
	email: string;
	password: string;
}

const login = () => {
	
  const { register, formState: { errors }, handleSubmit,  } = useForm<FormValues>();
    
  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
		
  }

	return (
		<div className='h-screen w-full flex justify-center items-center'>
			<div className='md:w-1/3 w-3/4 h-2/3 bg-gray-100 rounded-lg text-center'>
				<h1 className='my-5 text-3xl'>Login</h1>
				<form onSubmit={ handleSubmit( onSubmit )} className="flex flex-col p-5 text-left">
					<MyTextInput
						name='email'
						type='email'
						label='Email:'
						register={ register }
						errors={ errors.email }
					/>
					<MyTextInput
						name='username'
						label='Username:'
						register={ register }
						errors={ errors.username }
					/>
					<MyTextInput
						name='password'
						label='Password:'
						type='password'
						register={ register }
						errors={ errors.username }
					/>
				
					<button className='p-3 bg-sky-500 w-full rounded-lg text-white hover:bg-sky-60 mt-5' type='submit'>Enviar</button>
				</form>
			</div>
		</div>
	)
}

export default login;