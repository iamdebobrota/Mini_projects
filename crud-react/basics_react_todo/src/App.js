import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // OPEN_API= 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
  const [todo, settodo] = useState("");
  const [Todos, setTodos] = useState([]);
  const [edit, setedit] = useState("");
  const [editingTodoId, setEditingTodoId] = useState(null);

  const handleChange = (e) => {
    let inp = e.target;
    settodo(inp.value);
  };

  const handleSubmit = () => {
    const payload = {
      id: Date.now(),
      status: false,
      todo: todo,
    };
    setTodos([...Todos, payload]);
    settodo("");
  };
  const handleDelete = (id) => {
    let newTodo = Todos.filter((el) => el.id !== id);
    setTodos(newTodo);
  };
  const handleEdit = (id) => {
    setEditingTodoId(id);
    let newTodo = Todos.find((el) => el.id === id);
    setedit(newTodo.todo);
  };
  const editChange = (e) => {
    setedit(e.target.value);
  };
  const handleEditDone = () => {
    let editDone = Todos.filter((el) => {
      if (el.id === editingTodoId) {
        el.todo = edit;
      }
      return el;
    });
    setTodos(editDone);
    setEditingTodoId(null);
    setedit("");
  };
  const handleStatusChange = (id) => {
    let newStatus = Todos.filter((el) => {
      if (el.id === id) el.status = !el.status;
      return el;
    });
    setTodos(newStatus);
  };
  return (
    <div className="App">
      <input
        type="text"
        value={todo}
        name="todo"
        placeholder="type...."
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add</button>
      <div>
        {Todos.map((el) => (
          <div key={el.id}>
            <h3>{el.todo} </h3>
            <button onClick={() => handleStatusChange(el.id)}>
              {el.status ? "Complete" : "Not complete"}
            </button>
            <button onClick={() => handleDelete(el.id)}>Delete</button>
            <button onClick={() => handleEdit(el.id)}>Edit</button>
            {el.id === editingTodoId ? (
              <>
                <input
                  type="text"
                  placeholder={el.todo}
                  value={edit}
                  onChange={(e) => editChange(e)}
                />
                <button onClick={() => handleEditDone(el.id)}>Done</button>
              </>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
