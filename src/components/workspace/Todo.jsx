import React, { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addTask, completeTask, deleteTask } from "../../store/TodoSlice";
import { MdDeleteOutline } from "react-icons/md";

const MillSecToTime = (props) => {
  const {millSec} = props;
  console.log("mill sec are" + millSec);
  const date = new Date(millSec);
  console.log(date);
  const time = date.toLocaleTimeString();
  console.log(time);
  return time;
};
const TimeDuration = (props) => {
  const {todoItem} = props;
  const duration = todoItem.completedAt - todoItem.id;
  console.log(duration+"is the duration");
  const durationTime = new Date(duration);
  console.log("duration time is"+durationTime.toTimeString());
  return durationTime.toISOString().substring(11,19);
}
const Todo = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const inputRef = useRef("");
  const todo = useSelector((state) => state.todo);
  console.log(todo.todos)
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputRef.current.value) {
      setError(null);
      const date = Date.now();
      dispatch(
        addTask({
          id: date,
          task: inputRef.current.value,
          completed: false,
          completedAt: null,
        })
      );
    } else {
      setError("Add some text, Champion!");
    }
    e.target.reset();
  };

  return (
    <div className="mx-4 my-2">
      <h1 className="text-2xl font-semibold tracking-wide">Today's Tasks:</h1>
      <div className="shadow-xl rounded-xl p-4 border">
        <form
          className="flex flex-col md:flex-row justify-start items-start md:items-center gap-4 mx-6 my-2"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            name="todo"
            id="todo"
            className="border border-orange-600 rounded-lg py-2 px-4 my-2 w-full md:w-4/5"
            ref={inputRef}
            placeholder="Write your next mission"
          />
          <button
            type="submit"
            className="flex justify-center items-center bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-800"
          >
            <FaPlus className="inline mx-1 text-xl" />
            Add Task
          </button>
        </form>
        {error && (
          <span className="text-red-600 text-lg capitalize">{error}</span>
        )}
      </div>
      <div>
        <h1 className="text-xl font-semibold mt-4">On-Going Missions:</h1>
        <div className="ml-2 mr-2 border rounded-xl p-4 shadow-2xl">
          {todo.todos && todo.todos.length > 0 ? (
            todo.todos.map((todoItem, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center w-full border-b py-2"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={todoItem.completed}
                    name={todoItem.id}
                    id={todoItem.id}
                    className="mr-2 w-5 h-5"
                    onChange={() => dispatch(completeTask(todoItem))}
                  />
                  <label
                    htmlFor={todoItem.id}
                    className={`${
                      todoItem.completed ? "text-green-700" : "text-red-700"
                    } text-lg`}
                  >
                    {todoItem.task}
                  </label>
                </div>
                <div className="flex justify-end w-full gap-2 items-center">
                  {!todoItem.completed ? <p className="text-sm italic">Created at: <MillSecToTime millSec={todoItem.id}/></p> : <p className="text-sm italic">Completed In <TimeDuration todoItem={todoItem}/></p>}
                  {/* <TimeDuration todoItem={todoItem}/> */}
                  <MdDeleteOutline
                    className="text-3xl cursor-pointer"
                    onClick={() => dispatch(deleteTask(todoItem))}
                  />
                </div>
              </div>
            ))
          ) : (
            <h2 className="text-lg italic text-center">
              C'mon, add your first mission and accomplish it!
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
