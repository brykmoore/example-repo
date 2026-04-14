# my-utils

A small collection of utility functions.

## Installation

```bash
npm install my-utils
```

## Functions

- `add(a, b)` — adds two numbers
- `subtract(a, b)` — subtracts b from a
- `multiply(a, b)` — multiplies two numbers
- `divide(a, b)` — divides a by b (throws if b is zero)
- `clamp(value, min, max)` — clamps a value between min and max

## Usage

```js
const { add, subtract, multiply, divide, clamp } = require('my-utils')

add(1, 2)          // 3
subtract(5, 2)     // 3
multiply(3, 4)     // 12
divide(10, 2)      // 5
clamp(15, 0, 10)   // 10
```