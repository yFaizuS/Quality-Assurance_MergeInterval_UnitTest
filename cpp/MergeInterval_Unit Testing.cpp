#include <check.h>
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

START_TEST(test_case1) {
  Solution solution;

  vector<vector<int>> intervals = {{1, 3}, {2, 6}, {8, 10}, {15, 18}};
  vector<vector<int>> merged = solution.merge(intervals);

  vector<vector<int>> expected = {{1, 6}, {8, 10}, {15, 18}};
  ck_assert_int_eq(merged.size(), expected.size());
  ck_assert(std::equal(merged.begin(), merged.end(), expected.begin()));
} END_TEST

START_TEST(test_case2) {
  Solution solution;

  vector<vector<int>> intervals = {{1, 4}, {4, 5}};
  vector<vector<int>> merged = solution.merge(intervals);

  vector<vector<int>> expected = {{1, 5}};
  ck_assert_int_eq(merged.size(), expected.size());
  ck_assert(std::equal(merged.begin(), merged.end(), expected.begin()));
} END_TEST

START_TEST(test_case3) {
  Solution solution;

  vector<vector<int>> intervals = {{1, 2}, {3, 4}, {5, 6}};
  vector<vector<int>> merged = solution.merge(intervals);

  vector<vector<int>> expected = {{1, 2}, {3, 4}, {5, 6}};
  ck_assert_int_eq(merged.size(), expected.size());
  ck_assert(std::equal(merged.begin(), merged.end(), expected.begin()));
} END_TEST

START_TEST(test_case4) {
  Solution solution;

  vector<vector<int>> intervals = {{1, 4}, {2, 5}, {6, 8}};
  vector<vector<int>> merged = solution.merge(intervals);

  vector<vector<int>> expected = {{1, 5}, {6, 8}};
  ck_assert_int_eq(merged.size(), expected.size());
  ck_assert(std::equal(merged.begin(), merged.end(), expected.begin()));
} END_TEST

START_TEST(test_case5) {
  Solution solution;

  vector<vector<int>> intervals = {{1, 2}, {2, 3}, {3, 4}, {4, 5}};
  vector<vector<int>> merged = solution.merge(intervals);

  vector<vector<int>> expected = {{1, 5}};
  ck_assert_int_eq(merged.size(), expected.size());
  ck_assert(std::equal(merged.begin(), merged.end(), expected.begin()));
} END_TEST

START_TEST(test_case6) {
  Solution solution;

  vector<vector<int>> intervals = {{1, 3}, {4, 6}, {8, 10}, {15, 18}};
  vector<vector<int>> merged = solution.merge(intervals);

  vector<vector<int>> expected = {{1, 3}, {4, 6}, {8, 10}, {15, 18}};
  ck_assert_int_eq(merged.size(), expected.size());
  ck_assert(std::equal(merged.begin(), merged.end(), expected.begin()));
} END_TEST

START_TEST(test_case7) {
  Solution solution;

  vector<vector<int>> intervals = {{1, 2}, {2, 3}, {3, 4}, {5, 6}};
  vector<vector<int>> merged = solution.merge(intervals);

  vector<vector<int>> expected = {{1, 2}, {2, 3}, {3, 4}, {5, 6}};
  ck_assert_int_eq(merged.size(), expected.size());
  ck_assert(std::equal(merged.begin(), merged.end(), expected.begin()));
} END_TEST

int main() {
  Suite* suite = suite_create("MergeIntervals");
  TCase* tcase = tcase_create("TestCase");

  tcase_add_test(tcase, test_case1);
  tcase_add_test(tcase, test_case2);
  tcase_add_test(tcase, test_case3);
  tcase_add_test(tcase, test_case4);
  tcase_add_test(tcase, test_case5);
  tcase_add_test(tcase, test_case6);
  tcase_add_test(tcase, test_case7);

  suite_add_tcase(suite, tcase);

  SRunner* runner = srunner_create(suite);
  srunner_run_all(runner, CK_VERBOSE);
  int numFailures = srunner_ntests_failed(runner);
  srunner_free(runner);

  return numFailures == 0 ? 0 : 1;
}
