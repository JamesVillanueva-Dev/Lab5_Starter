// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('isPhoneNumber returns true for valid dash format', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber returns true for valid parenthesis format', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber returns false for missing dashes', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('isPhoneNumber returns false for invalid grouping', () => {
  expect(isPhoneNumber('abc')).toBe(false);
});

test('isEmail returns true for simple valid email', () => {
  expect(isEmail('user@example.com')).toBe(true);
});

test('isEmail returns true for underscore in domain', () => {
  expect(isEmail('a@my_domain.co')).toBe(true);
});

test('isEmail returns false when missing @', () => {
  expect(isEmail('userexample.com')).toBe(false);
});

test('isEmail returns false for unsupported TLD length', () => {
  expect(isEmail('user@example.info')).toBe(false);
});

test('isStrongPassword returns true for valid password', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});

test('isStrongPassword returns true for valid underscore usage', () => {
  expect(isStrongPassword('a_bcdef')).toBe(true);
});

test('isStrongPassword returns false when first char is not a letter', () => {
  expect(isStrongPassword('1abcd')).toBe(false);
});

test('isStrongPassword returns false when too short', () => {
  expect(isStrongPassword('Ab1')).toBe(false);
});

test('isDate returns true for single-digit month/day format', () => {
  expect(isDate('1/2/2026')).toBe(true);
});

test('isDate returns true for two-digit month/day format', () => {
  expect(isDate('12/31/2026')).toBe(true);
});

test('isDate returns false for wrong separator', () => {
  expect(isDate('12-31-2026')).toBe(false);
});

test('isDate returns false for 2-digit year', () => {
  expect(isDate('12/31/26')).toBe(false);
});

test('isHexColor returns true for 3-digit hex', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('isHexColor returns true for 6-digit hex without hash', () => {
  expect(isHexColor('A1B2C3')).toBe(true);
});

test('isHexColor returns false for invalid hex character', () => {
  expect(isHexColor('#12G')).toBe(false);
});

test('isHexColor returns false for invalid length', () => {
  expect(isHexColor('#12345')).toBe(false);
});
