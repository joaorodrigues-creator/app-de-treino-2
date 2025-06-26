import React, { useState } from "react";

function App() {
  const [exercicios, setExercicios] = useState([
    { nome: "Supino Inclinado com Halteres", peso: "", reps: "" },
    { nome: "Close Grip Pull Down", peso: "", reps: "" },
    { nome: "Aberturas na Máquina", peso: "", reps: "" },
    { nome: "Remada no Aparelho", peso: "", reps: "" },
    { nome: "Agachamento na Máquina", peso: "", reps: "" },
    { nome: "Fly Invertida", peso: "", reps: "" },
    { nome: "Remada Alta", peso: "", reps: "" },
    { nome: "Calf Raises", peso: "", reps: "" },
  ]);

  const handleChange = (index, campo, valor) => {
    const novos = [...exercicios];
    novos[index][campo] = valor;
    setExercicios(novos);
  };

  return (
    <div>
      <h1>Registo de Treino</h1>
      {exercicios.map((ex, index) => (
        <div key={index} style={{ marginBottom: "1em" }}>
          <strong>{ex.nome}</strong>
          <div>
            Peso (kg):{" "}
            <input
              type="text"
              value={ex.peso}
              onChange={(e) => handleChange(index, "peso", e.target.value)}
            />
            {"  "}
            Reps:{" "}
            <input
              type="text"
              value={ex.reps}
              onChange={(e) => handleChange(index, "reps", e.target.value)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
