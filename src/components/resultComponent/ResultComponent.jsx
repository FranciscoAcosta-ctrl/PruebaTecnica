import React, { useContext, useEffect } from "react";
import imgResult from "../../assets/ResultComponent/imgResult.png";
import CircularProgress from "@mui/material/CircularProgress";
import { NumberContext } from "../../contexts/NumberContext";
import ButtonModal from "../../componentsPlus/buttonModal/ButtonModal";

const ResultComponent = () => {
  const { result, loading } = useContext(NumberContext);

  useEffect(() => {
    message();
  }, [result]);

  const message = () => {
    switch (true) {
      case isNaN(result):
        return (
          <h1 className="result color-orange">
            <ButtonModal /> Resultado Indefinido
          </h1>
        );
      case result === Infinity:
        return (
          <h1 className="result color-orange">
            <ButtonModal /> Resultado Infinito
          </h1>
        );
      case result === -Infinity:
        return (
          <h1 className="result color-orange">
            <ButtonModal /> Resultado es menos Infinito
          </h1>
        );
      default:
        return result ? (
          <div className="result">
            <h1 className="color-orange ">
              <ButtonModal />
              serie(n) = {result}{" "}
            </h1>
          </div>
        ) : (
          <img className="result-img" srcSet={imgResult} alt="result" />
        );
    }
  };

  return (
    <>
      <div className="result-all">
        {loading ? (
          <>
            <CircularProgress
              size={150}
              sx={{ color: "#DA813A", padding: 2 }}
            />
          </>
        ) : (
          <>{message()}</>
        )}
      </div>
    </>
  );
};

export default ResultComponent;
