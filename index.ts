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

    return isInteger(value)
        && value >= start
        && value <= end;
}