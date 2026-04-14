/**
 * Adds two numbers.
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts b from a.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides a by b. Throws if b is zero.
 */
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

/**
 * Clamps a value between min and max.
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

module.exports = { add, subtract, multiply, divide, clamp };
