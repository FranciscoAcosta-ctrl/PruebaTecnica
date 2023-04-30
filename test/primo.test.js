// Importar la clase Series
import Series from "../src/components/aplicationComponent/Series";
describe("Prueba del método primo de la clase Series", () => {
  let series;

  beforeEach(() => {
    series = new Series(); // Crear una nueva instancia de la clase Series antes de cada prueba
  });

  test("El primer número primo debe ser 2", () => {
    expect(series.primo(1)).toBe(2);
  });

  test("El segundo número primo debe ser 3", () => {
    expect(series.primo(2)).toBe(3);
  });

  test("El tercer número primo debe ser 5", () => {
    expect(series.primo(3)).toBe(5);
  });

  test("El cuarto número primo debe ser 7", () => {
    expect(series.primo(4)).toBe(7);
  });

  test("El quinto número primo debe ser 11", () => {
    expect(series.primo(5)).toBe(11);
  });

  test("El sexto número primo debe ser 13", () => {
    expect(series.primo(6)).toBe(13);
  });

  test("El séptimo número primo debe ser 17", () => {
    expect(series.primo(7)).toBe(17);
  });

  test("El octavo número primo debe ser 19", () => {
    expect(series.primo(8)).toBe(19);
  });

  test("El noveno número primo debe ser 23", () => {
    expect(series.primo(9)).toBe(23);
  });

  test("El décimo número primo debe ser 27", () => {
    expect(series.primo(10)).toBe(29);
  });
});
