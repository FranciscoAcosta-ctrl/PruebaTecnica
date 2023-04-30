class Series {
  primo(n) {
    let count = 0;
    let number = 2;

    while (count < n) {
      let isPrime = true;

      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        count++;
      }

      number++;
    }
    return number - 1;
  }
  triangular(n) {
    if (n <= 0) {
      return 0;
    }

    return (n * (n + 1)) / 2;
  }
  fibonacci(n) {
    if (n <= 0) {
      return 0;
    }

    if (n === 1) {
      return 1;
    }

    let a = 0;
    let b = 1;
    let fib = 0;

    for (let i = 2; i <= n; i++) {
      fib = a + b;
      a = b;
      b = fib;
    }
    return fib;
  }
  serie(n) {
    let number = parseInt(n);
    let p = this.primo(number + 3);
    let t = this.triangular(number - 1);
    let f = this.fibonacci(number - 2);
    if (p === Infinity || t === Infinity || f === Infinity) {
      return Infinity;
    }
    try {
      return (p * t) / f;
    } catch (error) {
      console.log(
        `Error al calcular el término n-ésimo de la serie: ${error.message}`
      );
    }
  }
}

export default Series;
