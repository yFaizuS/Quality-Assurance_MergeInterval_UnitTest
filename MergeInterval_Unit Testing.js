const assert = require('assert');
const Solution = require('./MergeIntervalSolution');

// Valid Test Cases
// Test Case 1 
// this test is to test if the function returns the correct answer 
// can it merge 2 set of intervals while other intervals exist
{
  const solution = new Solution();
  const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
  const merged = solution.merge(intervals);
  const expected = [[1, 6], [8, 10], [15, 18]];
  assert.deepStrictEqual(merged, expected);
  console.log('Test Case 1 Passed');
}

// Test Case 2
// this tests if the function can merge just 2 set of intervals
{
  const solution = new Solution();
  const intervals = [[1, 4], [4, 5]];
  const merged = solution.merge(intervals);
  const expected = [[1, 5]];
  assert.deepStrictEqual(merged, expected);
  console.log('Test Case 2 Passed');
}

// Test Case 3
// this tests if the function can return a correct answer without merging any set of intervals
{
  const solution = new Solution();
  const intervals = [[1, 2], [3, 4], [5, 6]];
  const merged = solution.merge(intervals);
  const expected = [[1, 2], [3, 4], [5, 6]];
  assert.deepStrictEqual(merged, expected);
  console.log('Test Case 3 Passed');
}

// Test Case 4
// thi tests if the function can return a correct answer
// can the function merge 2 set of intervals while another set of interval is present
{
  const solution = new Solution();
  const intervals = [[1, 4], [2, 5], [6, 8]];
  const merged = solution.merge(intervals);
  const expected = [[1, 5], [6, 8]];
  assert.deepStrictEqual(merged, expected);
  console.log('Test Case 4 Passed');
}

// Test Case 5
// this tests if the function can merge all the sets of interval if all of them overlaps
{
  const solution = new Solution();
  const intervals = [[1, 2], [2, 3], [3, 4], [4, 5]];
  const merged = solution.merge(intervals);
  const expected = [[1, 5]];
  assert.deepStrictEqual(merged, expected);
  console.log('Test Case 5 Passed');
}

// Test Case 6
// this testss that the function can return the correct answer if there are no overlapping intervals
{
  const solution = new Solution();
  const intervals = [[1, 3], [4, 6], [8, 10], [15, 18]];
  const merged = solution.merge(intervals);
  const expected = [[1, 3], [4, 6], [8, 10], [15, 18]];
  assert.deepStrictEqual(merged, expected);
  console.log('Test Case 6 Passed');
}

// Test Case 7
// this tests that the function can return the correct answer if there is present a set interval that does not overlap with other set of intervals
{
  const solution = new Solution();
  const intervals = [[1, 2], [2, 3], [3, 4], [5, 6]];
  const merged = solution.merge(intervals);
  const expected = [[1, 4], [5, 6]];
  assert.deepStrictEqual(merged, expected);
  console.log('Test Case 7 Passed');
}

// Test Cases Violating Constraints
// these tests if the function still process inputs that violates the constraints
// Test Case 8: Empty intervals array
// This tests that the function's output would be null or error if the input is null
{
  const solution = new Solution();
  const intervals = [];
  const merged = solution.merge(intervals);
  const expected = []; // Change the expected output
  try {
    assert.deepStrictEqual(merged, expected);
    console.log('Test Case 8 Passed');
  } catch (error) {
    console.log('Test Case 8 Failed:', error.message);
  }
}

// Test Case 9: Start value greater than end value
// this tests the function if it can merge intervals while it violates the constraints
{
  const solution = new Solution();
  const intervals = [[2, 1], [4, 3]];
  const merged = solution.merge(intervals);
  const expected = []; // Change the expected output
  try {
    assert.deepStrictEqual(merged, expected);
    console.log('Test Case 9 Passed');
  } catch (error) {
    console.log('Test Case 9 Failed:', error.message);
  }
}

// Test Case 10: Start value and end value exceed the maximum allowed value (10^4)
// this tests the function if it can merge intervals while it violates the constraints
// this input represents that the input is at the upper boundary value (10^4), thus it covers a Boundary Value concept
{
  const solution = new Solution();
  const intervals = [[100000, 100001], [100002, 100003]];
  const merged = solution.merge(intervals);
  const expected = []; // Change the expected output
  try {
    assert.deepStrictEqual(merged, expected);
    console.log('Test Case 10 Passed');
  } catch (error) {
    console.log('Test Case 10 Failed:', error.message);
  }
}

// Test Case 11: Intervals array with maximum allowed length (104)
// this tests the function if it can merge intervals while it violates the constraints
{
  const solution = new Solution();
  const intervals = Array.from({ length: 105 }, (_, i) => [i, i + 1]);
  const merged = solution.merge(intervals);
  const expected = []; // Change the expected output
  try {
    assert.deepStrictEqual(merged, expected);
    console.log('Test Case 11 Passed');
  } catch (error) {
    console.log('Test Case 11 Failed:', error.message);
  }
}

// Test Case 12: Intervals array with invalid interval values (negative numbers)
// this tests the function if it can merge intervals while it violates the constraints
// this input represents that the input is at the lower boundary value (start<0), thus it covers a Boundary Value concept
{
  const solution = new Solution();
  const intervals = [[-1, 2], [3, -4], [-5, -6]];
  const merged = solution.merge(intervals);
  const expected = []; // Change the expected output
  try {
    assert.deepStrictEqual(merged, expected);
    console.log('Test Case 12 Passed');
  } catch (error) {
    console.log('Test Case 12 Failed:', error.message);
  }
}