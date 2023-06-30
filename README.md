# Quality Assurance Merge Interval
this is a repository for Quality Assurance Testing Assignments, for the Assignment I got assigned the task to Merge Intervals

# Assignment 1 - Unit Tests
It is required to take a ready solution of an assigned task from https://neetcode.io/practice (searchable by section + name of task) and cover this solution by unit-tests, using testing techniques and task text, using unit-testing tools (libraries and so on) available for your platform. Publish the solution code, tests and all other artifacts in the git repository. 
## The Problem 
The problem is called Merge Interval here are the details :

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input. 


**Example 1:**

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]

Output: [[1,6],[8,10],[15,18]]

Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].




**Example 2:**

Input: intervals = [[1,4],[4,5]]

Output: [[1,5]]

Explanation: Intervals [1,4] and [4,5] are considered overlapping.

 

**Constraints:**

1 <= intervals.length <= 104

intervals[i].length == 2

0 <= starti <= endi <= 104


for more details regarding the problem here is the link : https://leetcode.com/problems/merge-intervals/

Here are the links to the documents:

**Solution File [here](https://github.com/yFaizuS/Quality-Assurance_MergeInterval_UnitTest/blob/main/MergeIntervalSolution.js)**

**Testing File [here](https://github.com/yFaizuS/Quality-Assurance_MergeInterval_UnitTest/blob/main/MergeInterval_Unit%20Testing.js)**


# Bug report

The provided solution appears to be correct and free of bugs. It follows the typical approach to solving the problem of merging overlapping intervals.
the Solution breakdown:

1.	It starts by sorting the intervals based on their start values using **sort(intervals.begin(), intervals.end()).** This ensures that overlapping intervals are grouped together. 
2.	It initializes an empty vector **ans** to store the merged intervals. 
3.	It iterates over each interval in the sorted array.
4.	If **ans** is empty or the end value of the last interval in **ans** is less than the start value of the current interval, it means the intervals do not overlap. In this case, the current interval is added to **ans**. 
5.	If the intervals overlap, the end value of the last interval in **ans** is updated to the maximum of its current end value and the end value of the current interval. This effectively merges the intervals. 
6.	Finally, the merged intervals are returned in **ans**.

There is problem if the data we input violates the constraints it returns the data back. It crossed my mind if something that violates the constraints is inputted, it still processed the input.

```c++
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
  vector<vector<int>> merge(vector<vector<int>>& intervals) {
    vector<vector<int>> ans;

    sort(intervals.begin(), intervals.end());

    for (const vector<int>& interval : intervals) {
      if (ans.empty() || ans.back()[1] < interval[0])
        ans.push_back(interval);
      else
        ans.back()[1] = max(ans.back()[1], interval[1]);
    }

    return ans;
  }
};

int main() {
  Solution solution;

  int n;
  cout << "Enter the number of intervals: ";
  cin >> n;

  vector<vector<int>> intervals(n, vector<int>(2));
  cout << "Enter the intervals (start end):" << endl;
  for (int i = 0; i < n; i++) {
    cin >> intervals[i][0] >> intervals[i][1];
  }

  vector<vector<int>> merged = solution.merge(intervals);

  cout << "Merged intervals:" << endl;
  for (const auto& interval : merged) {
    cout << "[" << interval[0] << ", " << interval[1] << "] ";
  }
  cout << endl;

  return 0;
}

``` 
the code snippet above is a simple cpp program that accepts input from the user and processed it with the function. 

![Screenshot (296)](https://github.com/yFaizuS/Quality-Assurance_MergeInterval_UnitTest/assets/89732217/1f122e21-42af-41a3-b1f8-a72f71ac3531)

another bug was also encountered here is the positive set of interval is not shown in the output

to further prove the fact that it processed the input even though it violates the constraints is that -5 is greater than -6 yet still being processed and outputted.





# Assignment 2 E2E/UI Tests

It is required to take your solution from homework #1, add GUI to it (I recommend as web UI) and cover this solution with e2e/UI tests, using test design techniques and task text, using UI testing tools (libraries, etc) available for your platform. 

HTML file :
**https://github.com/yFaizuS/Quality-Assurance_MergeInterval_UnitTest/blob/main/MergeInterval_FormTesting.html**
E2E Test File : **https://github.com/yFaizuS/Quality-Assurance_MergeInterval_UnitTest/blob/main/Mergeinterval_Unit%20Testing%20E2E.js**
UI Test File : **https://github.com/yFaizuS/Quality-Assurance_MergeInterval_UnitTest/blob/main/MergeInterval_Unit%20Testing%20UI.js**


## E2E Test

here is my code regarding the E2E test, below is the code:

```javascript

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
```


In this code, the `userInputs` array simulates the input data that a user might provide. Each element in the `userInputs` array represents a test case, where each test case consists of an input array of intervals.

The `expectedOutputs` array represents the expected output for each corresponding test case in the `userInputs` array.

The code then iterates through each test case, executes the `merge` function of the `Solution class` with the given intervals, and compares the output with the expected output using `assert.deepStrictEqual().`

The test cases cover different scenarios, including valid intervals, edge cases, and constraints. The code provides appropriate comments to indicate the purpose of each test case.

Therefore, this code can be considered an E2E test as it covers the end-to-end functionality of the `merge` function by simulating user inputs, executing the function, and validating the output against the expected results.

## UI Test

here is my code on the UI test, below is the code:
```javascript
const { JSDOM } = require('jsdom');
const { document } = new JSDOM().window;

// Load the HTML file
const fs = require('fs');
const html = fs.readFileSync('./MergeInterval_FormTesting.html', 'utf8');
document.body.innerHTML = html;

// Include any necessary functions or modules
const { mergeIntervals } = require('./MergeIntervalSolution');

// Perform UI tests using Jest
// Test Case 1: Test the form submission and merging of intervals
test('Form submission and merging of intervals', () => {
  // Simulate user input
  const numIntervalsInput = document.getElementById('numIntervals');
  numIntervalsInput.value = '3';

  const intervalInputs = document.querySelectorAll('#intervalInputs input');
  intervalInputs[0].value = '1';
  intervalInputs[1].value = '3';
  intervalInputs[2].value = '2';
  intervalInputs[3].value = '6';
  intervalInputs[4].value = '8';
  intervalInputs[5].value = '10';

  // Trigger form submission
  const form = document.getElementById('intervalForm');
  form.dispatchEvent(new Event('submit'));

  // Get the merged intervals from the UI
  const mergedList = document.getElementById('mergedList').textContent;
  const merged = JSON.parse(`[${mergedList}]`);

  // Define the expected result
  const expected = [[1, 6], [8, 10]];

  // Compare the actual and expected results
  expect(merged).toEqual(expected);
});


```

This code is a UI test, it simulates user interaction with the HTML form and verifies the expected behavior of the user interface. It sets values for input fields, triggers a form submission event, and then checks if the resulting merged intervals displayed in the UI match the expected values. The test ensures that the UI components (form, input fields, merged intervals display) are functioning correctly and producing the desired output based on user actions.
The provided UI test focuses on a single test case:

Test Case 1: Form submission and merging of intervals

-The test simulates user input by setting values for the **numIntervals** input field and individual interval inputs.

-It triggers the submission of the form by simulating a **submit** event on the intervalForm element.

-The test retrieves the merged intervals from the UI by accessing the content of the **mergedList** element.

-The retrieved merged intervals are parsed into an array format.

-An expected result is defined, which represents the expected merged intervals: **[[1, 6], [8, 10]]**.

-The test compares the actual merged intervals with the expected result using Jest's **expect** function.


In summary, this test case verifies that the form submission and interval merging functionality work correctly. It ensures that the user inputs are processed accurately, the intervals are merged as expected, and the resulting merged intervals are correctly displayed in the UI.
