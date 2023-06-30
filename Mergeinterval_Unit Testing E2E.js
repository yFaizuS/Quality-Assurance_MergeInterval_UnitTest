const { Builder, By } = require('selenium-webdriver');
const assert = require('assert');

// User Inputs
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

(async () => {
  // Create a Selenium WebDriver instance
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Load the HTML file
    await driver.get('file://C:/Users/LEGION/OneDrive/Documents/Project front End/Quality-Assurance_MergeInterval_UnitTest/MergeInterval_FormTesting.html');

    // Initialize the solution class
    const Solution = require('./MergeIntervalSolution');
    const solution = new Solution();

    // Process user inputs and validate outputs
    for (let i = 0; i < userInputs.length; i++) {
      console.log(`Executing Test Case ${i + 1}`);

      // Simulate user input
      const intervals = userInputs[i];

      // Enter the intervals in the form
      for (let j = 0; j < intervals.length; j++) {
        const interval = intervals[j];
        const inputElements = await driver.findElements(By.css(`#intervalInputs input:nth-child(${j + 1})`));
        await inputElements[0].sendKeys(interval[0].toString());
        await inputElements[1].sendKeys(interval[1].toString());
      }

      // Trigger form submission
      const form = await driver.findElement(By.id('intervalForm'));
      await form.submit();

      // Wait for the merged intervals to be displayed
      await driver.sleep(1000);

      // Get the merged intervals from the UI
      const mergedList = await driver.findElement(By.id('mergedList'));
      const mergedText = await mergedList.getText();
      const merged = JSON.parse(`[${mergedText}]`);

      // Validate the output
      const expected = expectedOutputs[i];
      assert.deepStrictEqual(merged, expected);
      console.log(`Test Case ${i + 1} Passed\n`);

      // Clear the form for the next test case
      const clearButton = await driver.findElement(By.id('clearButton'));
      await clearButton.click();
    }

    console.log('All test cases executed successfully.');
  } finally {
    // Quit the WebDriver instance
    await driver.quit();
  }
})();
