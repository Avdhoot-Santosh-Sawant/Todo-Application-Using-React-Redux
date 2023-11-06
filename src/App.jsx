import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store/Counter";
import TodoApp from "./TodoApp";


function App() {
  const dispatch = useDispatch();
  const value = useSelector((store) => {
    return store.counter.count;
  });

  const inc = () => {
    dispatch(increment());
  };

  const dec = () => {
    dispatch(decrement())
  };

  return (
    <>
    
        <h1>Todo Application</h1>
        <h2>Count :- {value}</h2>



      <TodoApp inc={inc} dec={dec}/>
    
    </>
  );
}

export default App;
