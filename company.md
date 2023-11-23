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

 


# key rela -> dp rela
# 2. key pow rela -> dp rela
# 3. key sqr/sq_root rela -> dp rela
# 4. key +/- rela -> ..
# 5. key ?? rela -> ..
* https://leetcode.com/discuss/interview-question/2688170/New-OA-Question:-Bags-of-Rice

# among key create relation -> dp rela
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/description/



# subset rela under fullset
* https://leetcode.com/discuss/interview-question/2688170/New-OA-Question:-Bags-of-Rice
  
# Q constraint to dp[][]
* https://leetcode.com/discuss/interview-question/2688170/New-OA-Question:-Bags-of-Rice
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/

# imply dp dimension
https://leetcode.com/problems/perfect-squares/

# dfs, dp use same arr mem
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/




# variable racing (dp)
* https://leetcode.com/problems/ugly-number-ii/





# 1. dfs: leftout
# 2. 2D dp: tar (min/max) -> each_item
# 3. 1D dp: compress each_item
* https://leetcode.com/problems/perfect-squares/

# 1. dfs: leftout
# 2. 2D dp: tar (min/max) -> each_item
# 3. 1D dp: compress each_item
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target




# 1. dfs: leftout
# 2. 2D dp: each_item (times) -> tar
# 3. 1D dp: compress each_item
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/description/






# min/max outter tar
* https://leetcode.com/problems/perfect-squares/
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/

# times inner tar
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers





# dfs param ind VS local_loop ind
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target

# ind, other ind align this ind
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/description/
* e.g. dp[i], cost[i-1]



# 1. multi-deci ind retart
# 2. multi-deci ind never smaller
# 3. dfs param ind restart
# 4. dfs param ind never smaller
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/
* https://leetcode.com/problems/perfect-squares/

# natural bottom up ---> muti-deci
* https://leetcode.com/problems/perfect-squares/
* 1. bi-deci
* 2. few-deci
* 3. multi-deci(*)




# func return: valid(init / normal) OR invald
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target

# vars present -> param tree
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target




# too big -> str
# too big -> MOD
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers

# attach MOD to end cal
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers



# diff kind of base
# 1. build num -> 0
# 2. build num str -> ''
# 3. build str -> ''
# 4. etc
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/description/




# state: tar, item(ind, num, pow, etc)
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/
* https://leetcode.com/problems/perfect-squares/

# 1. tar -> single
# 2. tar -> multiple(*)
* https://leetcode.com/problems/ones-and-zeroes/

# 1. dp[i-1][tar-?] for heavy (times)
# 2. dp[i][tar-?] for light (min/max)
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/description/
* https://leetcode.com/problems/perfect-squares/




# unbound pick, item !move
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target
* 1. repeat
* 2. dfs(i, tar-cost) === unbound pick, item !move
* 3. dfs(i-1, tar) 
  
# bound pick, item move
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target
* 1. !repeat
* 2. dfs(i-1, tar-cost)
* 3. dfs(i-1, tar)




# 1. dfs (tar, item)
# 2. 2D dp (leftout_state diagnal)
# 3. 1D dp (compress each_item)
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers

# 1. dfs (tar, item)
# 2. 2D dp (leftout_state col)
# 3. 1D dp (compress each_item)
* https://leetcode.com/problems/perfect-squares




# build num direction
# 1. build num from R to L, largest digit (greedy)
# 2. build num from R to L, smallest digit (!greedy, !correct)
# 3. build num from L to R, !stable num largest
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target

# build num len
# build num len: surprise, exc.len > inc.len use
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target




# dp step: cat -> state -> state_group -> state_out -> decision -> base -> cache
* https://leetcode.com/problems/target-sum/
* 1. cat 
* 2. state
* 3. state_group
* 4. state_out
* 3. decision 
* 4. base 
* 5. cache
 
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/
* 1. cat: 0/1 unbound
* 2. state: tar, item
* 3. state_group: seeking_state, curr_state, leftout_state, fu_state
* 4. state_out: valid('' or normal) OR invalid('0')
* 3. decision: take/!
* 4. base: 
* 5. cache
 
* https://leetcode.com/problems/ones-and-zeroes/
* 1. cat 
* 2. state
* 3. state_group
* 4. state_out
* 3. decision 
* 4. base 
* 5. cache


# 1. base ind reach end (x)
# 2. base tar reach end (*)
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/



# pick/!
* Minimum subset sum difference (x)
* https://leetcode.com/problems/number-of-great-partitions/ (x)
* * https://leetcode.com/problems/count-primes/description/ (x)



# 0/1 knapsack, true/false
* https://www.geeksforgeeks.org/subset-sum-problem-dp-25/
* related to Q: include / !include, equal tar



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
  
