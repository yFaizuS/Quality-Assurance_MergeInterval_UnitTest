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

  // Test case 1
  // The Intervals are {{1, 3}, {2, 6}, {8, 10}, {15, 18}} 
  // the expected results are [1, 6] [8, 10] [15, 18] 
  vector<vector<int>> intervals1 = {{1, 3}, {2, 6}, {8, 10}, {15, 18}};
  vector<vector<int>> merged1 = solution.merge(intervals1);

  cout << "Merged intervals for test case 1: ";
  for (const auto& interval : merged1) {
    cout << "[" << interval[0] << ", " << interval[1] << "] ";
  }
  cout << endl;

  // Test case 2
  // The Intervals are {{{1, 4}, {4, 5}}
  // the expected results are [1, 5] 
  vector<vector<int>> intervals2 = {{1, 4}, {4, 5}};
  vector<vector<int>> merged2 = solution.merge(intervals2);

  cout << "Merged intervals for test case 2: ";
  for (const auto& interval : merged2) {
    cout << "[" << interval[0] << ", " << interval[1] << "] ";
  }
  cout << endl;
  
  // Test case 3
  // The Intervals are {{1, 2}, {3, 4}, {5, 6}}
  // the expected results are [1, 2] [3, 4] [5, 6] 
vector<vector<int>> intervals3 = {{1, 2}, {3, 4}, {5, 6}};
vector<vector<int>> merged3 = solution.merge(intervals3);

cout << "Merged intervals for test case 3: ";
for (const auto& interval : merged3) {
  cout << "[" << interval[0] << ", " << interval[1] << "] ";
}
cout << endl;

  // Test case 4
  // The Intervals are {{1, 4}, {2, 5}, {6, 8}}
  // the expected results are [1, 5] [6, 8] 
vector<vector<int>> intervals4 = {{1, 4}, {2, 5}, {6, 8}};
vector<vector<int>> merged4 = solution.merge(intervals4);

cout << "Merged intervals for test case 4: ";
for (const auto& interval : merged4) {
  cout << "[" << interval[0] << ", " << interval[1] << "] ";
}
cout << endl;

  // Test case 5
  // The Intervals are {{1, 2}, {2, 3}, {3, 4}, {4, 5}}
  // the expected results are [1, 5] 
vector<vector<int>> intervals5 = {{1, 2}, {2, 3}, {3, 4}, {4, 5}};
vector<vector<int>> merged5 = solution.merge(intervals5);

cout << "Merged intervals for test case 5: ";
for (const auto& interval : merged5) {
  cout << "[" << interval[0] << ", " << interval[1] << "] ";
}
cout << endl;

  return 0;
}


