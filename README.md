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

**Solution File : [https://github.com/yFaizuS/Quality-Assurance_MergeInterval_UnitTest/blob/main/MergeInterval_Solution.cpp](https://github.com/yFaizuS/Quality-Assurance_MergeInterval_UnitTest/blob/main/MergeIntervalSolution.js)**

**Testing File : [https://github.com/yFaizuS/Quality-Assurance_MergeInterval_UnitTest/blob/main/MergeInterval_Unit%20Testing.cpp](https://github.com/yFaizuS/Quality-Assurance_MergeInterval_UnitTest/blob/main/MergeInterval_Unit%20Testing.js)**


# Bug report

The provided solution appears to be correct and free of bugs. It follows the typical approach to solving the problem of merging overlapping intervals.
the Solution breakdown:

1.	It starts by sorting the intervals based on their start values using **sort(intervals.begin(), intervals.end()).** This ensures that overlapping intervals are grouped together. 
2.	It initializes an empty vector **ans** to store the merged intervals. 
3.	It iterates over each interval in the sorted array.
4.	If **ans** is empty or the end value of the last interval in **ans** is less than the start value of the current interval, it means the intervals do not overlap. In this case, the current interval is added to **ans**. 
5.	If the intervals overlap, the end value of the last interval in **ans** is updated to the maximum of its current end value and the end value of the current interval. This effectively merges the intervals. 
6.	Finally, the merged intervals are returned in **ans**.





# Assignment 2 E2E/UI Tests

It is required to take your solution from homework #1, add GUI to it (I recommend as web UI) and cover this solution with e2e/UI tests, using test design techniques and task text, using UI testing tools (libraries, etc) available for your platform. 

**https://github.com/yFaizuS/Quality-Assurance_MergeInterval_UnitTest/blob/main/MergeInterval_FormTesting.html**

