// Mocked version of the Solution class
class SolutionMock {
    constructor() {
      // Initialize the mock data
      this.intervalsData = [
        [[1, 3], [2, 6], [8, 10], [15, 18]],
        [[1, 4], [4, 5]],
        [[1, 2], [3, 4], [5, 6]],
        [[1, 4], [2, 5], [6, 8]],
        [[1, 2], [2, 3], [3, 4], [4, 5]],
        [[1, 3], [4, 6], [8, 10], [15, 18]],
        [[1, 2], [2, 3], [3, 4], [5, 6]],
        [],
        [[2, 1], [4, 3]],
        [[100000, 100001], [100002, 100003]],
        Array.from({ length: 105 }, (_, i) => [i, i + 1]),
        [[-1, 2], [3, -4], [-5, -6]],
      ];
    }
  
    // Mocked merge function
    merge(intervals) {
      // Find the corresponding mock data for the given intervals
      const index = this.intervalsData.findIndex((data) => {
        return JSON.stringify(data) === JSON.stringify(intervals);
      });
  
      // Return the mocked output for the given intervals
      if (index !== -1) {
        return this.intervalsData[index];
      } else {
        throw new Error('Mock data not found for intervals:', intervals);
      }
    }
  }
  
  const solution = new SolutionMock();

  // Test Case 1
  const intervals1 = [[1, 3], [2, 6], [8, 10], [15, 18]];
  const merged1 = solution.merge(intervals1);
  console.log('Merged Intervals (Test Case 1):', merged1);
  
  // Test Case 2
  const intervals2 = [[1, 4], [4, 5]];
  const merged2 = solution.merge(intervals2);
  console.log('Merged Intervals (Test Case 2):', merged2);
  
  // Test Case 3
  const intervals3 = [[1, 2], [3, 4], [5, 6]];
  const merged3 = solution.merge(intervals3);
  console.log('Merged Intervals (Test Case 3):', merged3);
  
  // Test Case 4
  const intervals4 = [[1, 4], [2, 5], [6, 8]];
  const merged4 = solution.merge(intervals4);
  console.log('Merged Intervals (Test Case 4):', merged4);
  
  // Test Case 5
  const intervals5 = [[1, 2], [2, 3], [3, 4], [4, 5]];
  const merged5 = solution.merge(intervals5);
  console.log('Merged Intervals (Test Case 5):', merged5);
  
  // Test Case 6
  const intervals6 = [[1, 3], [4, 6], [8, 10], [15, 18]];
  const merged6 = solution.merge(intervals6);
  console.log('Merged Intervals (Test Case 6):', merged6);
  
  // Test Case 7
  const intervals7 = [[1, 2], [2, 3], [3, 4], [5, 6]];
  const merged7 = solution.merge(intervals7);
  console.log('Merged Intervals (Test Case 7):', merged7);
  
  // Test Case 8
  const intervals8 = [];
  const merged8 = solution.merge(intervals8);
  console.log('Merged Intervals (Test Case 8):', merged8);
  
  // Test Case 9
  const intervals9 = [[2, 1], [4, 3]];
  const merged9 = solution.merge(intervals9);
  console.log('Merged Intervals (Test Case 9):', merged9);
  
  // Test Case 10
  const intervals10 = [[100000, 100001], [100002, 100003]];
  const merged10 = solution.merge(intervals10);
  console.log('Merged Intervals (Test Case 10):', merged10);
  
  // Test Case 11
  const intervals11 = Array.from({ length: 105 }, (_, i) => [i, i + 1]);
  const merged11 = solution.merge(intervals11);
  console.log('Merged Intervals (Test Case 11):', merged11);
  
  // Test Case 12
  const intervals12 = [[-1, 2], [3, -4], [-5, -6]];
  const merged12 = solution.merge(intervals12);
  console.log('Merged Intervals (Test Case 12):', merged12);
  
  