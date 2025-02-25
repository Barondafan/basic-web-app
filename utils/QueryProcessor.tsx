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
  
  let additionMatch = query.match(/what is (\d+)\s*\+\s*(\d+)\?/);
  if (additionMatch) {
      let num1 = parseInt(additionMatch[1], 10);
      let num2 = parseInt(additionMatch[2], 10);
      return (num1 + num2).toString();
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

  return "";
}
