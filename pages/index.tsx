import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Navbar } from '../components/ui';
import { AppLayout } from '../layouts';

export default function Home() {

  return (
    <AppLayout title="Welcome to For U">
      <div className='w-full h-screen bg-red-500 flex flex-row'>
        <div className='w-1/5 bg-green-500 h-full'>a</div>
        <div className='grow bg-green-600 h-full'>b</div>
        <div className='w-1/5 bg-green-700 h-full'>c</div>
      </div>
    </AppLayout>
  )
}
