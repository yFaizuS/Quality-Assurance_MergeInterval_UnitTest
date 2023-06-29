const Solution = require('./MergeIntervalSolution');
const assert = require('assert');

// Simulated user inputs
const userInputs = [
  [[1, 3], [2, 6], [8, 10], [15, 18]], // Test Case 1: Input intervals
  [[1, 4], [4, 5]], // Test Case 2: Input intervals
  [[1, 2], [3, 4], [5, 6]], // Test Case 3: Input intervals
  [[1, 4], [2, 5], [6, 8]], // Test Case 4: Input intervals
  [[1, 2], [2, 3], [3, 4], [4, 5]], // Test Case 5: Input intervals
  [[1, 3], [4, 6], [8, 10], [15, 18]], // Test Case 6: Input intervals
  [[1, 2], [2, 3], [3, 4], [5, 6]], // Test Case 7: Input intervals
  [], // Test Case 8: Empty intervals array
  [[2, 1], [4, 3]], // Test Case 9: Start value greater than end value
  [[100000, 100001], [100002, 100003]], // Test Case 10: Start value and end value exceed the maximum allowed value (10^4)
  Array.from({ length: 105 }, (_, i) => [i, i + 1]), // Test Case 11: Intervals array with maximum allowed length (104)
  [[-1, 2], [3, -4], [-5, -6]], // Test Case 12: Intervals array with invalid interval values (negative numbers)
];

// Expected outputs for the given inputs
const expectedOutputs = [
  [[1, 6], [8, 10], [15, 18]], // Test Case 1: Expected output
  [[1, 5]], // Test Case 2: Expected output
  [[1, 2], [3, 4], [5, 6]], // Test Case 3: Expected output
  [[1, 5], [6, 8]], // Test Case 4: Expected output
  [[1, 5]], // Test Case 5: Expected output
  [[1, 3], [4, 6], [8, 10], [15, 18]], // Test Case 6: Expected output
  [[1, 4], [5, 6]], // Test Case 7: Expected output
  [], // Test Case 8: Expected output
  [], // Test Case 9: Expected output
  [], // Test Case 10: Expected output
  [], // Test Case 11: Expected output
  [], // Test Case 12: Expected output
];

// Simulate the E2E test scenario
console.log('Starting E2E test...');

// Initialize the solution class
const solution = new Solution();

// Process user inputs and validate outputs
for (let i = 0; i < userInputs.length; i++) {
  console.log(`Executing Test Case ${i + 1}`);

  // Simulate user input
  const intervals = userInputs[i];

  // Execute the function
  const merged = solution.merge(intervals);

  // Validate the output
  const expected = expectedOutputs[i];
  assert.deepStrictEqual(merged, expected);
  console.log(`Test Case ${i + 1} Passed\n`);
}

console.log('All test cases executed successfully.');
