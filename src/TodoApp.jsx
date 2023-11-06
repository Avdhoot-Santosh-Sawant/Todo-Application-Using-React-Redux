import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, deleteTodo } from "./store/TodoSlice";

// eslint-disable-next-line react/prop-types
export default function TodoApp({ inc, dec }) {
  const dispatch = useDispatch();
  const [todoData, setTodo] = useState("");

  const addTodo = () => {
    if(todoData.length>4){
      dispatch(addTodos(todoData));
      inc();
      setTodo("");
    }
   
  };

  const delTodo = (id) => {
    dispatch(deleteTodo(id));
    dec();
  };

  const todos = useSelector((store) => {
    return store.todoSlice;
  });

  return (
    <>
      <hr />

      <div>
        <input
          className="todo-inp"
          type="text"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          value={todoData}
        />
        <button onClick={addTodo} className="btn-add">
          ADD
          
        </button>
      </div>
      <hr />

      <div className="card-con">
        {todos &&
          todos.map((value, index) => (
            <TodoCard
              key={index}
              index={index}
              value={value}
              delTodo={delTodo}
            />
          ))}
      </div>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function TodoCard({ value, index, delTodo }) {
  return (
    <>
      <div className="todo-card">
        <span>{value}</span>

        <div>
          <button onClick={() => delTodo(index)}>delete</button>
        </div>
      </div>
    </>
  );
}
