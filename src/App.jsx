import React, { useState } from "react";
import "./App.css";
import recordsData from "./data";
import Form from "./Form";

function App() {
  const [records, setRecords] = useState(
    [...recordsData].sort((a, b) => {
      const dateA = new Date(`${a.ano}-${a.mes}-${a.dia}`);
      const dateB = new Date(`${b.ano}-${b.mes}-${b.dia}`);
      return dateB - dateA;
    })
  );

  const [showModal, setShowModal] = useState(false);

  const handleAddRecord = (newRecord) => {
    const updated = [...records, newRecord].sort((a, b) => {
      const dateA = new Date(`${a.ano}-${a.mes}-${a.dia}`);
      const dateB = new Date(`${b.ano}-${b.mes}-${b.dia}`);
      return dateB - dateA;
    });

    setRecords(updated);
    setShowModal(false); // 🔧 FIX
  };

  const handleDelete = (index) => {
    const newList = [...records];
    newList.splice(index, 1);
    setRecords(newList);
  };

  const handleEdit = (index) => {
    const newText = prompt("Escribe la nueva descripción:");
    if (!newText) return;

    const updated = records.map((record, i) =>
      i === index ? { ...record, descripcion: newText } : record
    );

    setRecords(updated);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="menu-icon">☰</div>
      </header>

      <div className="add-button">
        <button onClick={() => setShowModal(true)}>Agregar</button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-button"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>

            <Form onAdd={handleAddRecord} />
          </div>
        </div>
      )}

      <div className="records-container">
        {records.map((record, index) => (
          <div key={index} className="record">
            <div className="record-info">
              <p>
                <strong>Fecha:</strong> {record.dia}/{record.mes}/{record.ano}
              </p>
              <p>{record.descripcion}</p>
            </div>

            <div className="icons">
              <span className="icon" onClick={() => handleEdit(index)}>
                ✏️
              </span>
              <span className="icon" onClick={() => handleDelete(index)}>
                🗑️
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
