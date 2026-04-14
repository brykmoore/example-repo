# my-utils

A small collection of utility functions.

## Installation

```bash
npm install my-utils
```

## Functions

- `add(a, b)` — adds two numbers
- `subtract(a, b)` — subtracts b from a
- `capitalize(str)` — capitalizes the first letter of a string
- `truncate(str, maxLength)` — truncates a string to `maxLength` and appends '...' if truncated
- `camelToKebab(str)` — converts a camelCase string to kebab-case

## Usage

```js
const { add, subtract, capitalize, truncate, camelToKebab } = require('my-utils')

add(1, 2)      // 3
subtract(5, 2) // 3

capitalize('hello') // 'Hello'
truncate('Hello world', 5) // 'Hello...'
camelToKebab('myFunctionName') // 'my-function-name'
```