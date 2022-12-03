import React from 'react'
import { UseFormRegister } from 'react-hook-form/dist'

interface InputProps{
	id?: string;
	label: string;
	name: string;
	type?: 'email' | 'password' | 'text';
	register: any; // arreglar
	errors: any; // arreglar
	iClassname?: string;
	lClassname?: string;
	eClassname?: string;
}

export const MyTextInput = ({ 
	id,
	label,
	name,
	register,
	errors,
	type = 'text',
	iClassname,
	eClassname,
	lClassname,
	...inputProps 

}: InputProps) => {
	return (
		<>
			<label id={ id } className={ "text-lg my-2" }>{ label }</label>
			<input 
				className={ "p-2 focus:outline-none focus:ring-1 ring-sky-500" }
				name={ name }
				id={ id }
				type={ type }
				{...register(name)}
				{...inputProps}
			/>
    	{errors && <span className={ "text-red-500 mt-2" }>{`${ name.toUpperCase() } is required `}</span>} 

		</>
	)
}
