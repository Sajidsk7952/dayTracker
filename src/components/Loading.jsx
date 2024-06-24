import React from 'react'

const Loading = () => {
  return (
    <div className='mx-10'>
        <h1 className="text-2xl font-semibold tracking-wide">Here you Go Acheiver:</h1>
        <div className=' mx-6 my-4 w-[130px] h-[130px] rounded-[50%] border-[10px] border-gray-200 border-t-[10px] border-t-orange-500 spin'></div>
      <h1 className="text-[25px] font-semibold capitalize">
        Your Previous Tasks
      </h1>
      <div className='mx-6 my-4 w-[130px] h-[130px] rounded-[50%] border-[10px] border-gray-200 border-t-[10px] border-t-orange-500 spin_2'></div>
      
    </div>
  )
}

export default Loading;
