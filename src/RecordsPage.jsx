import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import recordsData from "./data";
import "./RecordsPage.css";

const RecordsPage = () => {
  // Ordenamos los registros de más reciente a más antiguo
  const [records, setRecords] = useState(
    [...recordsData].sort((a, b) => new Date(b.date) - new Date(a.date))
  );

  const handleDelete = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Editar registro con ID: ${id}`);
  };

  const handleAdd = () => {
    const newRecord = {
      id: Date.now(),
      name: "Nuevo registro",
      date: new Date().toISOString().split("T")[0],
      description: "Descripción nueva",
      status: "Activo",
    };
    setRecords([newRecord, ...records]);
  };

  return (
    <div className="records-page">
      <div className="navbar">
        <div className="menu-icon">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      <div className="content">
        <div className="header">
          <button className="add-btn" onClick={handleAdd}>
            Agregar
          </button>
        </div>

        <div className="records-box">
          {records.map((record) => (
            <div key={record.id} className="record-row">
              <div className="record-info">
                <p>
                  <strong>Nombre:</strong> {record.name}
                </p>
                <p>
                  <strong>Fecha:</strong> {record.date}
                </p>
                <p>
                  <strong>Descripción:</strong> {record.description}
                </p>
                <p>
                  <strong>Estado:</strong> {record.status}
                </p>
              </div>
              <div className="record-actions">
                <FaEdit
                  className="edit-icon"
                  onClick={() => handleEdit(record.id)}
                />
                <FaTrash
                  className="delete-icon"
                  onClick={() => handleDelete(record.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecordsPage;
