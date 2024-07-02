import React, { useEffect } from "react";

function getCreationTime(millSec) {
    let date = new Date(millSec);
    return date.toLocaleTimeString();
}

function getCompletionTime(startSec, endSec) {
    let duration = endSec - startSec;
    let completionTime = new Date(duration);
    return completionTime.toISOString().substring(11, 19);
}

const Modal = ({ isOpen, onClose, task }) => {
    if (!isOpen || !task) return null;
    useEffect(()=>{
      if(isOpen){
        document.body.style.overflow = 'hidden';
      }
      else{
        document.body.style.overflow = "";
      }
      return ()=>{
        document.body.style.overflow = "";
      }
    },[isOpen])
    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50 z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg p-6 w-[90%] md:w-[60%] lg:w-[40%] max-h-[80%] overflow-y-auto shadow-lg"
                onClick={handleModalClick}
            >
                <div className="flex justify-between items-center border-b pb-2 mb-4">
                    <h2 className="text-2xl font-semibold">{task.id}</h2>
                    <button className="text-red-500 font-bold" onClick={onClose}>
                        X
                    </button>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2 underline">Todos</h3>
                    <ul>
                        {task.todos.map((todo) => (
                            <li key={todo.id} className="mb-2">
                                <div className="flex justify-between items-center">
                                    <span>{todo.task}</span>
                                    <input type="checkbox" checked={todo.completed} readOnly />
                                </div>
                                <div className="text-[16px] italic pl-4">
                                    {todo.completed && (
                                        <p className="text-green-500">completed in: {getCompletionTime(todo.id, todo.completedAt)}</p>
                                    )}
                                    {!todo.completed && <p className="text-red-500">created at: {getCreationTime(todo.id)}</p>}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-2 underline">Notes</h3>
                    <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: task.notes }} />
                </div>
            </div>
        </div>
    );
};

export default Modal;
