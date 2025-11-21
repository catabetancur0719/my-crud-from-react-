import { useState } from "react";
import "./Form.css";

export default function Form({ onAdd }) {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecord = {
      ano: year,
      mes: month,
      dia: day,
      descripcion: description,
    };

    onAdd(newRecord);

    // limpiar inputs
    setYear("");
    setMonth("");
    setDay("");
    setDescription("");
  };

  return (
    <div className="modal-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Año:</label>
          <input
            type="text"
            placeholder="Ej: 2025"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Mes:</label>
          <input
            type="text"
            placeholder="Ej: 01"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Día:</label>
          <input
            type="text"
            placeholder="Ej: 26"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Descripción:</label>
          <textarea
            placeholder="Escriba aquí una descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
