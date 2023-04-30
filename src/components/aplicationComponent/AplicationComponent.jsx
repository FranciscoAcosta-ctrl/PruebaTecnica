import React, { useState, useEffect } from "react";
import { NumberContext } from "../../contexts/NumberContext";
//Componentes principales de la prueba tecnica
import FormComponent from "../formComponent/FormComponent";
import ResultComponent from "../resultComponent/ResultComponent";
import Series from "./Series";


const AplicationComponent = () => {
  const [number, setNumber] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
    setTimeout( async() => {
        if(loading){
            let series = new Series()
            await setResult(series.serie(number));
            await setLoading(false)
        }
    }, 1000);
  },[loading])

  return (
    <>
      <NumberContext.Provider value={{ number, setNumber, loading, setLoading, result}}>
     
        <div className="form-all">
          <FormComponent/>
          <ResultComponent/>
        </div>
      </NumberContext.Provider>
    </>
  );
};

export default AplicationComponent;
