import Series from '../src/components/aplicationComponent/Series';

describe('Prueba del método triangular de la clase Series', () => {
  let series;

  beforeEach(() => {
    series = new Series(); // Crear una nueva instancia de la clase Series antes de cada prueba
  });

  test('El primer número triangular debe ser 0', () => {
    expect(series.triangular(0)).toBe(0);
  });

  test('El segundo número triangular debe ser 1', () => {
    expect(series.triangular(1)).toBe(1);
  });

  test('El tercer número triangular debe ser 3', () => {
    expect(series.triangular(2)).toBe(3);
  });

  test('El cuarto número triangular debe ser 6', () => {
    expect(series.triangular(3)).toBe(6);
  });

  test('El quinto número triangular debe ser 10', () => {
    expect(series.triangular(4)).toBe(10);
  });

  test('El sexto número triangular debe ser 15', () => {
    expect(series.triangular(5)).toBe(15);
  });

  test('El séptimo número triangular debe ser 21', () => {
    expect(series.triangular(6)).toBe(21);
  });

  test('El octavo número triangular debe ser 28', () => {
    expect(series.triangular(7)).toBe(28);
  });

  test('El noveno número triangular debe ser 36', () => {
    expect(series.triangular(8)).toBe(36);
  });

  test('El décimo número triangular debe ser 45', () => {
    expect(series.triangular(9)).toBe(45);
  });
});
