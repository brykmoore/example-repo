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

/**
 * Capitalizes the first letter of a string.
 */
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
 
/**
 * Truncates a string to maxLength and appends '...' if truncated.
 */
function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}
 
/**
 * Converts a camelCase string to kebab-case.
 */
function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
module.exports = { add, subtract, multiply, divide, clamp };
