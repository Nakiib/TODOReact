const Todo = ({ todo, deleteTodo, updateTodo }) => {
  const { title, description, state, priority, id } = todo;
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5 className={`${state && "text-decoration-line-through"}`}>
            {title}
          </h5>
          <p className={`${state && "text-decoration-line-through"}`}>
            {description}
          </p>
          <div className="d-flex gap-2">
            <button className="btn btn-info btn-sm" onClick={() => updateTodo(id)}>Actualizar</button>
            <button
              onClick={() => deleteTodo(id)}
              className="btn btn-danger btn-sm "
            >
              Eliminar
            </button>
          </div>
        </div>
        {priority && (
          <span className="badge text-bg-secondary">Prioritario</span>
        )}
        <span className="badge text-bg-primary">
          {state ? "Completado" : "Pendiente"}
        </span>
      </div>
    </li>
  );
};

export default Todo;
