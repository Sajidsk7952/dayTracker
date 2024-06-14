import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addTask, completeTask,deleteTask } from "../../store/TodoSlice";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const Todo = () => {
  const dispatch = useDispatch();
  const inputRef = useRef("");
  const todo = useSelector((state) => state.todo);
  console.log(todo.todos);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    const date = new Date();
    dispatch(
      addTask({
        id: date.toLocaleTimeString(),
        task: inputRef.current.value,
        completed: false,
      })
    );
    e.target.reset();
  };
  return (
    <div className="mx-4 my-2">
      <h1 className="capitalize text-[25px] font-semibold tracking-wide">
        Today's tasks :{" "}
      </h1>
      <div>
        <div>
          <div className="">
            <form
              action=""
              className="flex flex-col ml:flex-row justify-start items-start ml:items-center gap-4 mx-6 my-2"
              onSubmit={submitHandler}
            >
              <input
                type="text"
                name="todo"
                id="todo"
                className=" border border-orange-600 rounded-lg py-2 px-4 my-2 w-full ml:w-[80%]"
                ref={inputRef}
                placeholder="Write your next mission"
              />
              <button
                type="submit"
                className="flex justify-center items-center bg-orange-500 text-white px-4 py-2 rounded-md"
              >
                <FaPlus className="inline mx-1" />
                Add Task
              </button>
            </form>
          </div>
          <div>
            <h1 className="capitalize text-[22px] font-semibold">
              On-Going Missions:
            </h1>
            <div className="ml-2 mr-2">
              {todo.todos && todo.todos.length > 0 ? (
                todo.todos.map((todoItem, index) => (
                  <div key={index} className="flex justify-between items-center ml:w-[80%]">
                    <div>
                      <input
                        type="checkbox"
                        checked={todoItem.completed}
                        name={todoItem.id}
                        id={todoItem.id}
                        className={`mr-2 p-8`}
                        onChange={() => {
                          dispatch(completeTask(todoItem));
                        }}
                      />
                      <label
                        htmlFor={todoItem.id}
                        className={`${
                          todoItem.completed ? "text-green-700" : "text-red-700"
                        } text-[18px]`}
                      >
                        {todoItem.task}
                      </label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p className="hidden ml:inline">
                        created at: {todoItem.id}
                      </p>
                      <div className="flex gap-1">
                        <MdDelete onClick={()=>dispatch(deleteTask(todoItem))}/>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h2>C'Mon add your first mission and accomplish it </h2>
              )}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Todo;
