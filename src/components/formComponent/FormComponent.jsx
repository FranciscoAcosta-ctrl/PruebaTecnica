import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import { NumberContext } from "../../contexts/NumberContext";
// estilo personalizado para el TextField
const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
});

const FormComponent = () => {
  const { setNumber, setLoading } = useContext(NumberContext);
  const [valueInput, setValueInput] = useState([]);

  // Función para manejar el cambio de valor del campo de entrada
  const changeValueInput = (e) => {
    if (/^\d{0,5}$/.test(e.target.value)) {
      setValueInput(e.target.value);
    }
  };

  // Función para manejar el envío del formulario
  const onForm = (e) => {
    e.preventDefault();
    setLoading(true);
    setNumber(valueInput);
  };
  return (
    <>
      <div className="form-content">
        <h1 className="form-title">
          Aplicación <label className="color-orange">Técnica</label>
        </h1>
        <p className="form-text">
          La finalidad de esta aplicación es resolver la siguiente ecuación:
        </p>
        <div className="form-exp">
          <label className="color-orange">
            serie(n) = (primo(n+3) * triangular(n-1))/ fibonacci(n-2)
          </label>
        </div>
        <p className="form-text">
          Introduce el valor de 'n' en el siguiente campo de texto:
        </p>
        <form onSubmit={onForm} className="form-inputs">
          <StyledTextField
            className="input"
            value={valueInput}
            label="Ingresa un número"
            id="numN"
            sx={{ width: "100%" }}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <label className="color=orange">n =</label>
                </InputAdornment>
              ),
              style: { color: "#DA813A" },
              type: "number",
            }}
            onChange={changeValueInput}
            variant="outlined"
          />
          <label htmlFor="numN" className="helper">
            Ingresa un número positivo
          </label>
          <Button
            className="btn-submit"
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            style={{ background: "#DA813A" }}
          >
            Calcular
          </Button>
        </form>
      </div>
    </>
  );
};

export default FormComponent;
