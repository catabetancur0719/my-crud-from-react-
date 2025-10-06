import { useState } from "react";

export default function Form() {

  //estado para cada campo
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [description, setDescription] = useState("");

  const [records, setRecords] = useState([])

  //funcion que se ejecuta cuando se hace submit
  const handleSubmit = (event) => {
    event.preventDefault();// evita que la pagina se recarge

    //objeto de informacion de formulario
    const newRecord = {
      year: year,
      month: month,
      day: day,
      description: description,
    }

    //lo agregamos al array de registros 
    setRecords([...records,newRecord])

  console.log("Datos guardados:");
  console.log("Año:", year);
  console.log("Mes:", month);
  console.log("Día:", day);
  console.log("Descripción:", description);
  console.log("Datos guardados:", newRecord);
  console.log("Todos los registros:", records);

    //limpiamos los imputs
    setYear("");
    setMonth("");
    setDay("");
    setDescription("");
  }

return (
  <form onSubmit={handleSubmit}>

    <div className="form-group">
      <label >Año:</label>
      <input 
      type="text" 
      placeholder="Ej: 2025"
      value={year}
      onChange={(event) => setYear(event.target.value)
      }
      />
    </div>

    <div className="form-group">
      <label>Mes:</label>
      <input 
      type="text" 
      placeholder="Ej: Enero"
      value={month}
      onChange={(event) => setMonth(event.target.value)}
      />
    </div>

    <div className="form-group">
      <label>Día</label>
      <input 
      type="text" 
      placeholder="Ej: 26"
      value={day}
      onChange={(event) => setDay(event.target.value)}
      />
    </div>

    <div>
      <label> Descripción</label>
      <textarea 
      placeholder="Escriba aquí una descripción "
      value={description}
      onChange={(event) => setDescription(event.target.value)}
      />
    </div>

    <button type="submit">Enviar</button>
  </form>
  );
}