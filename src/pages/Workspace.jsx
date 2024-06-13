import React from 'react'
import firestoreService from '../firebase/firestoreService';
import Todo from '../components/workspace/Todo';

const Workspace = () => {
  console.log(firestoreService.firestore);
  return (
    <div className='top-[30px] relative'>
      <div>
        <Todo />
      </div>
      <div>
        Your previous tasks
      </div>
    </div>
  )
}

export default Workspace;
