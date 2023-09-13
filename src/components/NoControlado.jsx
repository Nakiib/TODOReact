import { useRef, useState } from "react";

const NoControlado = () => {
  const form = useRef(null); // nulo porque aun no se ha renderizado el formulario

  //msg errror
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    console.log(
      "Formulario sent, Title : " +
        e.target.title.value +
        " --- Decription " +
        e.target.description.value +
        " --- Status " +
        e.target.status.value
    );

    e.preventDefault();
    //capturara datos del formulario
    const data = new FormData(form.current); //new FormData(form.current) es la forma de obtener los datos del formulario

    const dataObject = Object.fromEntries([...data.entries()]); // Object.fromEntries() convierte un iterable a un objeto
    //desestructuracion
    const { title, description, status } = dataObject;

    // validar los datos
    if (!title.trim() || !description.trim() || !status.trim()) {
      setError("Todos los campos son obligatorios");
    } else setError("");

    //enviar los datos
    console.log(title, description, status);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit} ref={form}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control mb-2"
            id="todo"
            placeholder="Ingrese Todo"
            name="title"
            defaultValue={"Todo # 1"}
          />
          <textarea
            className="form-control mb-2"
            placeholder="Ingrese Descripcion del Todo"
            name="description"
            defaultValue={"Start doing the Todo # 1"}
          />
          <select
            className="form-select mb-2"
            name="status"
            defaultValue={"pendiente"}
          >
            <option value="pendiente">Pendiente</option>
            <option value="finalizado">Finalizado</option>
          </select>
          <button type="submit" className="btn btn-primary">
            Procesar
          </button>
          {error !== "" && error}
        </div>
      </form>
    </div>
  );
};
export default NoControlado;
