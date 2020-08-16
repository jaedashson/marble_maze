export const quadForm = (a, b, c) => {
  let soln1 = null;
  let soln2 = null;

  soln1 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  soln2 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);

  return [soln1, soln2];
}

export const degToRad = deg => {
  return deg * (Math.PI / 180);
}

export const calculateDistance = (x1, y1, x2, y2) => {
  const dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  return dist;
}