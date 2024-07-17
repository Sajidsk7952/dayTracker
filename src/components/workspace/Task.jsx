import React, { useEffect, useState } from "react";
import firestoreService from "../../firebase/firestoreService";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import ErrorModal from "../ErrorModal"; // Import ErrorModal component
import { GrExpand } from "react-icons/gr";

const getHead = (id) => {
  const arr = id.split(" ");
  const month = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const monthStr = month[arr[0]];
  return monthStr + " " + arr[1] + " " + arr[2];
};

const Task = () => {
  const user = useSelector((state) => state.auth);
  const [isOpen, setOpen] = useState(false);
  const [currTask, setCurrTask] = useState(null);
  const [error, setError] = useState(null);
  const [isErrorOpen, setIsErrorOpen] = useState(false); // State to handle error modal
  const uid = user.userData.uid;
  const [taskArr, setTasksArr] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const tasks = await firestoreService.getTasks(uid);
        if (tasks) {
          setTasksArr(tasks);
        }
      } catch (error) {
        console.log(error.message);
        setError(error.message);
        setIsErrorOpen(true); // Show error modal
      }
    };
    getTasks();
  }, [uid]);

  const getCompleted = (task) => {
    let noOfCompleted = 0;
    for (let i = 0; i < task.length; i++) {
      const todo = task[i];
      if (todo.completed) {
        noOfCompleted += 1;
      }
    }
    const percent = (noOfCompleted * 100) / task.length;
    return percent.toFixed(2);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrTask(null);
  };

  const handleOpen = (task) => {
    setOpen(true);
    setCurrTask(task);
  };

  const handleErrorClose = () => {
    setIsErrorOpen(false);
    setError(null);
  };

  return (
    <section className="mb-8 mt-6">
      <h1 className="text-[35px] text-center font-semibold capitalize">
        Your Previous Tasks
      </h1>
      <div className="flex justify-center items-start flex-wrap gap-4">
        {taskArr?.length > 0 ? (
          taskArr.map((task, index) => (
            <div key={index} className="border shadow-lg m-4 w-[300px]">
              <div className="mx-4 my-6">
                <div className="flex justify-around gap-4">
                  <h2 className="text-[20px] font-semibold">
                    {getHead(task.id)}
                  </h2>
                  <p className="text-[18px] text-green-800">
                    {getCompleted(task.todos)} %
                  </p>
                  <GrExpand
                    className="text-[18px] hover:text-[22px] mx-[2px] hover:mx-0 cursor-pointer hover:text-orange-500"
                    onClick={() => handleOpen(task)}
                  />
                </div>
                <ul className="list-decimal mx-4 my-4">
                  {task.todos.map((todo) => (
                    <li
                      key={todo.id}
                      className={`${
                        todo.completed ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {todo.task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <div>Start your productivity from today</div>
        )}
      </div>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={handleClose} task={currTask} />
      )}
      {isErrorOpen && (
        <ErrorModal
          isOpen={isErrorOpen}
          onClose={handleErrorClose}
          errorMessage={error}
        />
      )}
    </section>
  );
};

export default Task;
