# is-integer-in-range

Tests if a value is an integer in a specified range.

The range is inclusive of the start and end values.


## Install

```bash
npm install --save is-integer-in-range
```

or

```bash
yarn add is-integer-in-range
```


## Examples

```typescript
import isIntegerInRange from "is-integer-in-range";
isIntegerInRange(5, 1, 10); // -> true
isIntegerInRange(5.1, 1, 10); // -> false
isIntegerInRange(0, 1, 10); // -> false
isIntegerInRange(1, 1, 10); // -> true
isIntegerInRange(10, 1, 10); // -> true
isIntegerInRange(11, 1, 10); // -> false
```


## API

Tests if the specified value is an integer in the specified range.

The range is inclusive of the start and end values.

```typescript
export default function isIntegerInRange(value: number, start: number, end: number);
```


## See also

 * [is-integer](https://www.npmjs.com/package/is-integer)