import { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({ addTodo }) => {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [state, setState] = useState("pendiente");
  //otra alternativa
  const [todo, setTodo] = useState({
    //objeto con los datos del formulario
    title: "",
    description: "",
    state: "pendiente",
    priority: true,
  });
  const { title, description, state, priority } = todo;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Titulo y Descripcion son obligatorios",
      });
    } else {
      addTodo({
        id: Date.now(),
        ...todo,
        state: state === "finalizado", // ? true : false sobran pero se entiende mejor
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your TODO has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleChange = (e) => {
    // onChange={(e) => setTodo({ ...todo, priority: e.target.checked })}

    /* [e.target.name] == "priority"
      ? setTodo({ ...todo, priority: e.target.checked })
      : setTodo({ ...todo, [e.target.name]: e.target.value });

    //otra alternativa de setTodo*/
    const { name, type, checked, value } = e.target;
    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control mb-2"
            id="todo"
            placeholder="Ingrese Todo"
            name="title"
            value={todo.title}
            onChange={handleChange}
          />
          <textarea
            className="form-control mb-2"
            placeholder="Ingrese Descripcion del Todo"
            name="description"
            value={todo.description}
            onChange={handleChange}
          />
          <div className="form-check mb-2">
            <input
              type="checkbox"
              name="priority"
              className="form-check-input"
              id="inputCheck"
              checked={todo.priority}
              onChange={handleChange}
            />
            <label htmlFor="inputCheck">Dar priority</label>
          </div>
          <select
            className="form-select mb-2"
            name="state"
            value={todo.state}
            onChange={handleChange}
          >
            <option value="pendiente">Pendiente</option>
            <option value="finalizado">Finalizado</option>
          </select>
          <button type="submit" className="btn btn-primary">
            Procesar
          </button>
        </div>
      </form>
    </div>
  );
};
export default Formulario;
