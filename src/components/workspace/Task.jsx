import React, { useEffect, useState } from "react";
import firestoreService from "../../firebase/firestoreService";
import { useSelector } from "react-redux";
import Modal from "./Modal";

const Task = () => {
  const user = useSelector((state) => state.auth);
  const [isOpen, setOpen] = useState(false);
  const [currTask, setCurrTask] = useState(null);
  // console.log(user);
  const uid = user.userData.uid;
  // console.log(uid);
  const [taskArr, setTasksArr] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasks = await firestoreService.getTasks(uid);
      //   console.log(tasks);
      setTasksArr(tasks);
    };
    getTasks();
  }, [uid]);
  //   console.log(taskArr);
  function getCompleted(task) {
    let noOfCompleted = 0;
    for (let i = 0; i < task.length; i++) {
      const todo = task[i];
      if (todo.completed) {
        noOfCompleted += 1;
      }
    }
    const percent = (noOfCompleted * 100) / task.length;
    return percent.toFixed(2);
  }
  const handleClose = () => {
    setOpen(false);
    setCurrTask(null);
  };
  const handleOpen = (task) => {
    setOpen(true);
    // console.log(isOpen)
    setCurrTask(task);
  };
  return (
    <section className="mb-8">
      <h1 className="text-[25px] font-semibold capitalize">
        Your Previous Tasks
      </h1>
      <div className="flex flex-wrap gap-4">
        {taskArr.length > 0 ? (
          taskArr.map((task, index) => (
            <div key={index} className="border shadow-lg m-4">
              <div className="mx-4 my-6">
                <h2 className="text-[20px]">{task.id}</h2>
                <p className="text-[18px] text-green-800">
                  {getCompleted(task.todos)} %
                </p>
                <p
                  className="underline cursor-pointer"
                  onClick={() => handleOpen(task)}
                >
                  view in detail
                </p>
              </div>
              {isOpen && (
                <Modal isOpen={isOpen} onClose={handleClose} task={currTask} />
              )}
            </div>
          ))
        ) : (
          <div>Start your productivity from today</div>
        )}
      </div>
    </section>
  );
};

export default Task;
