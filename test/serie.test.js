import Series from "../src/components/aplicationComponent/Series.js";

describe("Prueba del método serie de la clase Series", () => {
  let series;

  beforeEach(() => {
    series = new Series(); // Crear una nueva instancia de la clase Series antes de cada prueba
  });

  test("La serie con n = 1 debe ser NaN", () => {
    expect(series.serie(1)).toBe(NaN);
  });

  test("La serie con n = 2 debe ser Infinity", () => {
    expect(series.serie(2)).toBe(Infinity);
  });

  test("La serie con n = 3 debe ser 39", () => {
    expect(series.serie(3)).toBe(39);
  });

  test("La serie con n = 4 debe ser 102", () => {
    expect(series.serie(4)).toBe(102);
  });

  test("La serie con n = 5 debe ser 95", () => {
    expect(series.serie(5)).toBe(95);
  });

  test("La serie con n = 6 debe ser 115", () => {
    expect(series.serie(6)).toBe(115);
  });

  test("La serie con n = 7 debe ser 121.8", () => {
    expect(series.serie(7)).toBe(121.8);
  });

  test("La serie con n = 8 debe ser 108.5", () => {
    expect(series.serie(8)).toBe(108.5);
  });

  test("La serie con n = 9 debe ser 102.46153846153847", () => {
    expect(series.serie(9)).toBe(102.46153846153847);
  });

  test("La serie con n = 10 debe ser 87.85714285714286", () => {
    expect(series.serie(10)).toBe(87.85714285714286);
  });
});
