export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "barondafan";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "btniu";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "btniu";
  }
  
  let additionMatch = query.match(/What is (\d+)\s*\plus\s*(\d+)\?/);
  if (additionMatch) {
      let num1 = parseInt(additionMatch[1], 10);
      let num2 = parseInt(additionMatch[2], 10);
      return (num1 + num2).toString();
  }

    let subtractionMatch = query.match(/What is (\d+)\s*minus\s*(\d+)\?/);
    if (subtractionMatch) {
        let num1 = parseInt(subtractionMatch[1], 10);
        let num2 = parseInt(subtractionMatch[2], 10);
        return (num1 - num2).toString();
    }

  let multiplicationMatch = query.match(/What is (\d+)\s*multiplied by\s*(\d+)\?/);
  if (multiplicationMatch) {
      let num1 = parseInt(multiplicationMatch[1], 10);
      let num2 = parseInt(multiplicationMatch[2], 10);
      return (num1 * num2).toString();
  }

  let largestMatch = query.toLowerCase().match(/which of the following numbers is the largest: ([\d, ]+)\?/);
  if (largestMatch) {
      let numbers = largestMatch[1].split(",").map(num => parseInt(num.trim(), 10));
      return Math.max(...numbers).toString();
  }

  let squareCubeMatch = query.match(/Which of the following numbers is both a square and a cube: ([\d, ]+)\?/);
  if (squareCubeMatch) {
      let numbers = squareCubeMatch[1].split(",").map(num => parseInt(num.trim(), 10));
      let perfectSixthPowers = numbers.filter(num => Number.isInteger(Math.pow(num, 1/6)));
      return perfectSixthPowers.join(", ") || "None";
  }

  let primeMatch = query.match(/Which of the following numbers are primes: ([\d, ]+)\?/);
  if (primeMatch) {
      let numbers = primeMatch[1].split(",").map(num => parseInt(num.trim(), 10));
      let primes = numbers.filter(num => {
          if (num < 2) return false;
          for (let i = 2; i <= Math.sqrt(num); i++) {
              if (num % i === 0) return false;
          }
          return true;
      });
      return primes.join(", ") || "None";
  }

  let powerMatch = query.match(/What is (\d+)\s*to the power of\s*(\d+)\?/);
  if (powerMatch) {
      let base = BigInt(powerMatch[1]);
      let exponent = BigInt(powerMatch[2]);
      return BigInt(Math.pow(Number(base), Number(exponent))).toString();
  }

  let tripleAdditionMatch = query.match(/What is (\d+)\s*plus\s*(\d+)\s*plus\s*(\d+)\?/);
  if (tripleAdditionMatch) {
      let num1 = parseInt(tripleAdditionMatch[1], 10);
      let num2 = parseInt(tripleAdditionMatch[2], 10);
      let num3 = parseInt(tripleAdditionMatch[3], 10);
      return (num1 + num2 + num3).toString();
  }
  return "";
}
