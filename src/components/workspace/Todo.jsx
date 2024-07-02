import React, { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addTask, addTodo, completeTask, deleteTask,setNotes } from "../../store/TodoSlice";
import { MdDeleteOutline } from "react-icons/md";
import TextEditor from "./TextEditor";
import firestoreService from "../../firebase/firestoreService";

const MillSecToTime = (props) => {
  const { millSec } = props;
  // console.log("mill sec are" + millSec);
  const date = new Date(millSec);
  // console.log(date);
  const time = date.toLocaleTimeString();
  // console.log(time);
  return time;
};
const TimeDuration = (props) => {
  const { todoItem } = props;
  const duration = todoItem.completedAt - todoItem.id;
  // console.log(duration + "is the duration");
  const durationTime = new Date(duration);
  // console.log("duration time is" + durationTime.toTimeString());
  return durationTime.toISOString().substring(11, 19);
};
const Todo = () => {
  const auth = useSelector(state => state.auth);
  const uid = auth.userData.uid;
  const dispatch = useDispatch();
  const inputRef = useRef("");
  useEffect(() => {
    const fetchData = async () => {
      const doc = await firestoreService.getTodo(uid);
      console.log(doc.data);
      if (doc.success) {
        dispatch(addTodo({...doc.data}));
      }
    };
    fetchData();
  }, [uid]);
  const [error, setError] = useState(null);
  console.log("loads!!");
  const todo = useSelector((state) => state.todo);
  // console.log(todo);
  // console.log(todo.todos);
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
  const saveHandler = async(data)=>{
    // e.preventDefault();
    console.log(data);
    console.log(todo);
    dispatch(setNotes(data));
    console.log(todo);
    // const task = 
    const res = await firestoreService.addTask(uid,todo);
    // console.log(res);
    if(res.success){
      window.alert("saved succesfully !!");
    }
    console.log(res.data)
  }
  return (
    <div className="mx-4 my-2">
      <h1 className="text-2xl font-semibold tracking-wide">Here you Go Acheiver:</h1>
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
      <section>
        <h1 className="text-xl font-semibold my-4">On-Going Missions:</h1>
        <div className="flex flex-col md:flex-row">
          <div className=" flex-1 ml-2 mr-2 border rounded-xl p-2 shadow-2xl">
            {todo.todos && todo.todos.length > 0 ? (
              todo.todos.map((todoItem, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-start md:justify-between items-start w-full border-b py-2"
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
                      } text-[18px]`}
                    >
                      {todoItem.task}
                    </label>
                  </div>
                  <div className="flex justify-end w-full gap-2 items-center">
                    {!todoItem.completed ? (
                      <p className="text-sm italic">
                        Created at: <MillSecToTime millSec={todoItem.id} />
                      </p>
                    ) : (
                      <p className="text-sm italic">
                        Completed In <TimeDuration todoItem={todoItem} />
                      </p>
                    )}
                    {/* <TimeDuration todoItem={todoItem}/> */}
                    <MdDeleteOutline
                      className="text-3xl cursor-pointer"
                      onClick={() => dispatch(deleteTask(todoItem))}
                    />
                  </div>
                </div>
              ))
            ) : (
              <h2 className=" text-lg italic text-center">
                C'mon, add your first mission and accomplish it!
              </h2>
            )}
          </div>
          <div className="flex-1 shadow-2xl rounded-lg border py-2">
            <TextEditor onclick={saveHandler} data={todo.notes}/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Todo;
