import { useState } from "react";

const Cat = () => {
  const [cat, setCat] = useState({
    name: "Paco",
    year: 5,
  });

  const handleClick = () => {
    // setCat({...cat, year : cat.year +1})
    //otra alternativa
    // setCat({ name: cat.name, year: cat.year + 1 });
    //otra alternativa funcion de flecha
    setCat((prev) => ({ ...prev, year: cat.year + 1 }));
  };
  return (
    <>
      <h3>Cat Name : {cat.name}</h3>
      <h3>Cat Year : {cat.year}</h3>
      <button className="btn btn-dark mg-2" onClick={handleClick}>
        Update Year
      </button>
    </>
  );
};

export default Cat;
