import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { NumberContext } from "../../contexts/NumberContext";
import Series from "../../components/aplicationComponent/Series";
import "./ButtonModal.scss";

const ButtonModal = () => {
  const { result, number } = useContext(NumberContext);
  const [formula, setFormula] = useState(undefined);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    console.log(1);
    let series = new Series();
    setFormula({
      p: series.primo(parseInt(number) + 3),
      t: series.triangular(parseInt(number) - 1),
      f: series.fibonacci(parseInt(number) - 2),
    });
  }, [number]);

  return (
    <>
      {formula ? (
        <>
          <Button className="btnModal" onClick={handleOpen}>
            ?
          </Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="modal-box">
              <Button className="btnExit" onClick={handleClose}>
                X
              </Button>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ fontWeight: 900 }}
              >
                ¿Cómo se puede obtener este resultado?
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <p>Para resolver la fórmula:</p>
                <div className="form-exp">
                  <label className="color-orange">
                    serie(n) = (primo({number}+3) * triangular({number}-1))/
                    fibonacci({number}-2)
                  </label>
                </div>
                <p>Primero simplificamos la fórmula por partes</p> <br />
                <p>p = primo({number}+3)</p>
                <p>p = {formula.p}</p> <br />
                <p>t = triangular({number}-1)</p>
                <p>t = {formula.t}</p> <br />
                <p>f = fibonacci({number}-2)</p>
                <p>f = {formula.f}</p> <br />
                <div className="form-exp">
                  <label className="color-orange">serie(n)= (p * t) / f</label>
                </div>
                <p>
                  serie(n) = ({formula.p} * {formula.t}) / {formula.f}
                </p>
                <p>
                  serie(n)= ({formula.p * formula.t}) / {formula.f}
                </p>
                <div className="form-exp">
                  <label className="color-orange">serie(n)= {result}</label>
                </div>
              </Typography>
            </Box>
          </Modal>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ButtonModal;
