import "./App.css";
import Header from "./mycomp/Header";
import { TodoItem } from "./mycomp/TodoItem";
import { Todos } from "./mycomp/Todos";
import React, { useState } from "react";

function App() {
  var sn = 0;
  const [darkmode, setdark] = useState("btn btn-dark mt-5");
  const darkm = () => {
    setdark("btn btn-light mt-5");
  };

  const onDelete = (todoind) => {
    let k = todos.filter((a, ind) => {
      return ind !== todoind;
    });

    setTodos(k);
  };

  const onAdd = (todoadd) => {
    var n = todos.slice();
    if (todos.length === 0) {
      sn = 0;
    } else sn = todos[todos.length - 1].sno + 1;
    const m = { sno: sn, title: todoadd };
    n[todos.length] = m;
    console.log(todos[4]);
    setTodos(n);
  };
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Header title="TO-DO-LIST" searchBar={false} />
      <button
        type="button"
        class={darkmode}
        id="dark"
        onClick={() => {
          darkm();
        }}
      >
        Dark Mode
      </button>
      <Todos todos={todos} onAdd={onAdd} onDelete={onDelete} />
    </>
  );
}

export default App;
