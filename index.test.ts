import test from "ava";
import isIntegerInRange from ".";

test("isIntegerInRange", t => {
    t.true(isIntegerInRange(5, 1, 10));
    t.false(isIntegerInRange(5.1, 1, 10));
    t.false(isIntegerInRange(0, 1, 10));
    t.true(isIntegerInRange(1, 1, 10));
    t.true(isIntegerInRange(10, 1, 10));
    t.false(isIntegerInRange(11, 1, 10));
});