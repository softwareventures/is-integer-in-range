import isInteger = require("is-integer");

/**
 * Tests if the specified value is an integer in the specified range.
 *
 * The range is inclusive of the start and end values.
 */
export default function isIntegerInRange(value: number, start: number, end: number): boolean {
    if (typeof start !== "number" || typeof end !== "number") {
        throw new TypeError("Expected start and end to be numbers");
    }

    return isInteger(value) && value >= start && value <= end;
}

/**
 * Curried variant of isIntegerInRange.
 *
 * Takes a range specified as a start and end value, and returns a function
 * that tests if a specified value is an integer within the range.
 *
 * The range is inclusive of the start and end values.
 */
export function isIntegerInRangeFn(start: number, end: number): (value: number) => boolean {
    return value => isIntegerInRange(value, start, end);
}
