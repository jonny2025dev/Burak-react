function calculate(expression: string): number {
    const parts = expression.split('+').map(part => part.trim());
    const numbers = parts.map(Number);
    return numbers.reduce((sum, num) => sum + num, 0);
  }


  console.log(calculate("1 + 2"));   
  console.log(calculate("10 + 5"));   
  console.log(calculate(" 7 +  8"));