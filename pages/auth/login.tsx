import React from 'react'

const login = () => {
	return (
		<div className='h-screen w-full flex justify-center items-center'>
			<div className='md:w-1/3 w-3/4 h-2/3 bg-gray-100 rounded-lg text-center'>
				<h1 className='my-5 text-3xl'>Login</h1>
				<form></form>
				<button className='p-3 bg-sky-500 w-28 rounded-lg text-white hover:bg-sky-600'>Enviar</button>
			</div>
		</div>
	)
}

export default login