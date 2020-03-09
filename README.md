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

### isIntegerInRange

Tests if the specified value is an integer in the specified range.

The range is inclusive of the start and end values.

```typescript
export default function isIntegerInRange(value: number, start: number, end: number): boolean;
```

### isIntegerInRangeFn

Curried variant of `isIntegerInRange`.

Takes a range specified as a start and end value, and returns a function
that tests if a specified value is within the range.

The range is inclusive of the start and end values.

```typescript
export function isIntegerInRangeFn(start: number, end: number): (value: number) => boolean;
```


## See also

 * [is-integer](https://www.npmjs.com/package/is-integer)