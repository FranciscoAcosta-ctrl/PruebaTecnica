import React, { useState, useEffect } from "react";
import { NumberContext } from "../../contexts/NumberContext";
// Importa los componentes principales de la prueba tecnica
import FormComponent from "../formComponent/FormComponent";
import ResultComponent from "../resultComponent/ResultComponent";
import Series from "./Series"; // Importa la clase Series

const AplicationComponent = () => {
  const [number, setNumber] = useState(null); // Define el estado del número de entrada
  const [result, setResult] = useState(null); // Define el estado del resultado
  const [loading, setLoading] = useState(false); // Define el estado de carga

  useEffect(() => {
    setTimeout(async () => {
      // Espera 1 segundo para simular la carga asíncrona
      if (loading) {
        let series = new Series(); // Crea una instancia de la clase Series
        await setResult(series.serie(number)); // Llama al método serie() y asigna el resultado al estado de resultado
        await setLoading(false); // Cambia el estado de carga a falso
      }
    }, 1000);
  }, [loading]); // Se ejecuta cuando el estado de carga cambia

  return (
    <>
      <NumberContext.Provider
        value={{ number, setNumber, loading, setLoading, result }}
      >
        <div className="form-all">
          <FormComponent />
          <ResultComponent />
        </div>
      </NumberContext.Provider>
    </>
  );
};

export default AplicationComponent; // Exporta el componente para su uso en otros archivos
