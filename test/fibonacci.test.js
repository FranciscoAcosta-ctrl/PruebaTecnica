import Series from '../src/components/aplicationComponent/Series';

describe('Prueba del método fibonacci de la clase Series', () => {
  let series;

  beforeEach(() => {
    series = new Series();
  });

  test('Fibonacci de 1 debe ser 1', () => {
    expect(series.fibonacci(1)).toBe(1);
  });

  test('Fibonacci de 2 debe ser 1', () => {
    expect(series.fibonacci(2)).toBe(1);
  });

  test('Fibonacci de 3 debe ser 2', () => {
    expect(series.fibonacci(3)).toBe(2);
  });

  test('Fibonacci de 4 debe ser 3', () => {
    expect(series.fibonacci(4)).toBe(3);
  });

  test('Fibonacci de 5 debe ser 5', () => {
    expect(series.fibonacci(5)).toBe(5);
  });

  test('Fibonacci de 6 debe ser 8', () => {
    expect(series.fibonacci(6)).toBe(8);
  });

  test('Fibonacci de 7 debe ser 13', () => {
    expect(series.fibonacci(7)).toBe(13);
  });

  test('Fibonacci de 8 debe ser 21', () => {
    expect(series.fibonacci(8)).toBe(21);
  });

  test('Fibonacci de 9 debe ser 34', () => {
    expect(series.fibonacci(9)).toBe(34);
  });

  test('Fibonacci de 10 debe ser 55', () => {
    expect(series.fibonacci(10)).toBe(55);
  });
});
