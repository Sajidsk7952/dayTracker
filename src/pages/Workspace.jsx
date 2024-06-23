import React from 'react'
import firestoreService from '../firebase/firestoreService';
import Todo from '../components/workspace/Todo';
import Task from '../components/workspace/Task';

const Workspace = () => {
  // console.log(firestoreService.firestore);
  return (
    <div className='top-[30px] relative'>
      <h1 className='text-[30px] font-semibold text-center capitalize bg-gradient-to-r from-yellow-200 via-red-500 to-orange-600 bg-clip-text text-transparent'>Your Workspace</h1>
      <div className='text-left'>
        <Todo />
      </div>
      <div className='text-left'>
        <Task />

      </div>
    </div>
  )
}

export default Workspace;
