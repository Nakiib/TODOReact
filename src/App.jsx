import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Todos from "./components/Todos";
import anime from "animejs";

const initialState = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

const App = () => {
  const [todos, setTodos] = useState(
    initialState //lo hemos creado fuera para que no se vuelva a crear cada vez que se renderiza el componente
  );

  useEffect(()=> {
    const element = document.querySelector(".my-element");
    const animation = anime({
      targets: element,
      translateY: [100, 0], // Cambia la posición vertical del elemento
      opacity: [0, 1], // Cambia la opacidad del elemento
      duration: 1000, // Duración de la animación en milisegundos
      easing: "easeOutQuad", // Función de aceleración
      autoplay: true, // Iniciar la animación automáticamente
    });
    return () => {
      animation.pause(); // Pausa la animación antes de desmontar
    };
  }, [])

  useEffect(() => {
    //console.log("useEffect"); //react hace renderizaciones extra por el codigo.
    localStorage.setItem("todos", JSON.stringify(todos));
     // Limpia la animación cuando el componente se desmonta

  }, [todos]); //con los corchetes decimos que solo se renderize las veces que nos interese, [] solo la primera vez
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    const newArray = todos.filter((todo) => todo.id !== id);
    setTodos(newArray); //Estamos filtrando con el id, solo se quedan los que no coinciden con el id
  };
  const updateTodo = (id) => {
    const newArray = todos.map((todo) => {
      todo.id === id ? (todo.state = !todo.state) : todo;
      /* otra forma
      if (todo.id === id) {
        todo.state = !todo.state;
      }*/
      return todo;
    });
    setTodos(newArray);
  };

  const orderTodo = (arrayTodos) => {
    return arrayTodos.sort((a, b) => {
      if (a.priority === b.priority) {
        return 0;
      } else if (a.priority) {
        return -1;
      } else if (!a.priority) {
        return 1;
      }
    });
  };
  return (
    <div className="my-element mb-5">
      <h1 className="my-5 text-center">Formularios controlados, (DOM)</h1>
      <Formulario addTodo={addTodo} />
      <Todos
        todos={orderTodo(todos)}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default App;
