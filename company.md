# note

* another cat
* https://leetcode.com/problems/target-sum/solutions/455024/dp-is-easy-5-steps-to-think-through-dp-questions/
* category:
* 0/1 Knapsack
* Unbounded Knapsack
* Shortest Path (eg: Unique Paths I/II)
* Fibonacci Sequence (eg: House Thief, Jump Game)
* Longest Common Substring/Subsequeunce




* another cat
* Optimization Goals:
Maximum/Minimum Value: Problems where the goal is to maximize or minimize a certain value, such as the maximum sum, minimum cost, etc.
Counting: Problems where the goal is to count the number of ways to achieve a certain target or satisfy a condition.
Longest/Shortest: Problems that aim to find the longest or shortest sequence, path, or subsequence.

* Constraints:
Knapsack Problems: Problems involving selecting items to maximize or minimize a value while adhering to certain capacity constraints.
Subset Sum Problems: Problems where the goal is to find subsets of elements that sum up to a given target value.
Coin Change Problems: Problems where the goal is to find the minimum number of coins or ways to make change for a given amount.

* Number of States:
1D DP Problems: Problems where only one parameter (usually an array index) is used to represent the state in the DP table.
2D DP Problems: Problems that require two parameters to represent the state, often used in grid-based problems or with two sequences.

* Dependent/Independent Subproblems:
Dependent Subproblems: Problems where the solution of one subproblem depends on the solutions of previously solved subproblems.
Independent Subproblems: Problems where subproblems are not related to each other, and their solutions can be computed independently.

* Overlapping Subproblems:
Memoization: Problems that can be solved efficiently using a top-down approach with memoization to avoid redundant computations.
Tabulation: Problems that can be solved using a bottom-up approach with a DP table to store the solutions of subproblems.

* State Transition:
Unbounded Knapsack: Problems where multiple transitions to the same state are allowed, indicating that the same item can be used multiple times.
Bounded Knapsack: Problems where each item can be used a limited number of times.

* Grid-Based Problems:
Grid Traversal: Problems involving movement or pathfinding on a grid, like finding the shortest path or counting paths between two points.

* String-Based Problems:
Longest Common Subsequence: Problems where the goal is to find the longest common subsequence between two strings.
Edit Distance: Problems that involve converting one string into another using minimum operations (e.g., insertions, deletions, substitutions).





# microsoft

* https://leetcode.com/discuss/interview-experience/4226180/Microsoft (orig)

* https://leetcode.com/problems/subarray-sums-divisible-by-k/

* https://leetcode.com/problems/reorganize-string/

* https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

 

 

# amazon

* https://www.1point3acres.com/bbs/thread-936988-1-1.html (all)

* https://www.1point3acres.com/bbs/thread-898653-1-1.html (all)

* https://www.1point3acres.com/bbs/thread-923632-1-1.html (all)

 


# 1. key rela -> dp rela
# 2. key pow rela -> dp rela
# 3. key sqr/sq_root rela -> dp rela
# 4. key +/- rela -> ..
# 5. key ?? rela -> ..
* https://leetcode.com/discuss/interview-question/2688170/New-OA-Question:-Bags-of-Rice

# subset rela under fullset
* https://leetcode.com/discuss/interview-question/2688170/New-OA-Question:-Bags-of-Rice

# variable racing (dp)
* https://leetcode.com/problems/ugly-number-ii/



# 2D loop -> dp[tar]
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/ (outer: i -> each_item ======> inner: tar -> pow =====> dp ind: key: tar, val: times -> dp[tar])



# pick/!
* Minimum subset sum difference (x)
* https://leetcode.com/problems/number-of-great-partitions/ (x)
* * https://leetcode.com/problems/count-primes/description/ (x)

# pick/! build num, dfs
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/
* relate to Q: include / !include
* outter: i -> tar
* inner: 0 -> cost_item (imply other ind)
* dp ind: key tar, val: min



# min/max outter tar; times inner tar
* https://leetcode.com/problems/perfect-squares/
* 1. dfs: muti-deci
* 2. 2D dp: imply num
* 3. 1D dp: inner, outter matter; min/max outter tar; times inner tar

# min/max outter tar; times inner tar
* https://leetcode.com/problems/perfect-squares/
* 1. dfs: multi-deci
* 2. 2D dp: inner, outter !matter
* 3. 1D dp: inner, outter matter; min/max outter tar; times inner tar

# muti-deci
* https://leetcode.com/problems/perfect-squares/
* 1. bi-deci
* 2. few-deci
* 3. multi-deci(*0

# imply num/tar
https://leetcode.com/problems/perfect-squares/




# 1. tar -> single
# 2. tar -> multiple(*)
* https://leetcode.com/problems/ones-and-zeroes/


# 0/1 knapsack === pick/! === leftout_state
* https://leetcode.com/problems/perfect-squares/







# 0/1 knapsack, true/false
* https://www.geeksforgeeks.org/subset-sum-problem-dp-25/
* related to Q: include / !include, equal tar



# 0/1 knapsack, times
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/
* relate to Q: include pow / !include pow, acc
* outter: i -> each item
* inner: tar -> bound(pow)
* dp ind: key: tar, val: times -> dp[tar]

* https://leetcode.com/problems/partition-equal-subset-sum/ (2 subsets)
* relate to Q: include num / !include num, compare
* outter: i -> each item
* inner: tar -> bound(single_n)
* dp ind: key: tar, val: times -> dp[tar]

* https://leetcode.com/problems/target-sum (2 subsets)
* relate to Q: include item / !include item
* outter: 0 -> each item
* inner: tar -> bound(single_n)
* dp ind: key: tar, val: times -> dp[tar]

* https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-x/ ====> https://leetcode.com/problems/partition-equal-subset-sum/ (2 subsets)
* https://leetcode.com/discuss/interview-question/1271034/count-no-of-subsets-with-given-difference-dp ====> https://leetcode.com/problems/partition-equal-subset-sum/ (2 subsets)
* arr[0] === 0 -> dp[0][0] = 2
* arr[0] !== 0 -> dp[0][0] = 1
* in range -> dp[0][arr[0]] = 1



# outer loop (0 -> each) ===> outer loop (...) ===> ... outer loop (tar -> bound) ===> inner loop (...) ===> ..  loops in logic sequence order
* https://leetcode.com/problems/number-of-ways-to-earn-points/
* relate to Q: solve / !solve
* outter: 1 -> each_item
* inner: tar -> bound(0)
* inner: 1 -> quantity
* dp ind: key: tar, val: times -> dp[tar]

* https://leetcode.com/problems/ones-and-zeroes/
* relate to Q: take / !take
* outter: 1 -> each_item
* inner: 0 -> zeros (tar)
* inner: 0 -> ones (tar)
* dp ind: multi tar (zeros and ones)


# dp step: cat -> state -> decision -> base -> cache
* https://leetcode.com/problems/target-sum/
* 1. cat (1. 0/1 item once; 2. item !once; 3. path; 4. fabio; 5. subseq)
* 2. state (index, tar)
* 3. choose (+/-)
* 4. base (bound, tar, etc)
* 5. cache (hash)
 
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/
* 1. cat (1/0; unbound_item_reuse; ...)
* 2. state (tar, no ind, as repeated)
* 3. decision (digit 9->1)
* 4. base (tar < 0, tar === 0)
* 5. cache
 
* https://leetcode.com/problems/ones-and-zeroes/
* 1. cat (0/1, bound)
* 2. state (ind, #zero, #one)
* 3. decision take / !take
* 4. base (ind, #zero, #one)
* 5. cache
 

# how to build number: dfs bottom up; compare from right to left
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/


# cat -> state -> decision (repeat from start, ind no use) -> ...
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/

# cat -> state -> decision (peer compete in loop) -> 
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/


# 2D can switch, no problem
# 2D outter: tar ---> inner: n, same
# 2D outter: n ----> inner: tar, same
* https://www.geeksforgeeks.org/subset-sum-problem-dp-25/


# compress n, not tar
# 2D outter: n ---> inner: tar (uncompress)
# 1D outter: n ---> inner: tar (compress)
* https://www.geeksforgeeks.org/subset-sum-problem-dp-25/


# 1D, inner tar asc (with help)
# 1D, inner tar desc (no help curr, prev)
# 1D, inner tar, asc (with help curr, prev)
* https://www.geeksforgeeks.org/subset-sum-problem-dp-25/


# tar becomes multi elements (zeros and ones), not just 1 variable
* https://leetcode.com/problems/ones-and-zeroes/


# 3D -> 2D, outer_loop each item, compress it; inner loop revert, so !overwrite
* https://leetcode.com/problems/ones-and-zeroes/






# num consumed left out
* https://leetcode.com/problems/ugly-number (num consumed left out)



# bottom up (to pow)
# bottom up (to sqr_root)
# bottom up (to tar/sum)
# bottom up (to ?)
* https://leetcode.com/problems/valid-perfect-square/
 
 
* https://leetcode.com/problems/substring-with-largest-variance/ (orig)

* https://leetcode.com/problems/maximum-subarray/
  
