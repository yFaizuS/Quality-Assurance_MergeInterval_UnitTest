class SolutionMock {
    merge(intervals) {
      // Sort the intervals based on the start value
      intervals.sort((a, b) => a[0] - b[0]);
  
      const mergedIntervals = [];
      let currentInterval = intervals[0];
  
      for (let i = 1; i < intervals.length; i++) {
        const nextInterval = intervals[i];
  
        // Check if the current and next intervals overlap
        if (currentInterval[1] >= nextInterval[0]) {
          // Merge the intervals
          currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
        } else {
          // Add the merged interval to the result and update the current interval
          mergedIntervals.push(currentInterval);
          currentInterval = nextInterval;
        }
      }
  
      // Add the last merged interval to the result
      mergedIntervals.push(currentInterval);
  
      return mergedIntervals;
    }
  }