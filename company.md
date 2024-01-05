# note

* another cat
* https://leetcode.com/problems/target-sum/solutions/455024/dp-is-easy-5-steps-to-think-through-dp-questions/
* category:
* 0/1 Knapsack
* Unbounded Knapsack
* Shortest Path (eg: Unique Paths I/II)
* Fibonacci Sequence (eg: House Thief, Jump Game)
* Longest Common Substring/Subsequeunce


# full interview
* https://www.1point3acres.com/bbs/thread-1034698-1-1.html
  

# microsoft

* https://leetcode.com/discuss/interview-experience/4226180/Microsoft (orig)
* https://leetcode.com/problems/subarray-sums-divisible-by-k/
* https://leetcode.com/problems/reorganize-string/
* https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

 

 

# amazon

* https://www.1point3acres.com/bbs/thread-936988-1-1.html (all)
* https://docs.google.com/document/d/1GL6w0hbcEsJQa6IWnFZiKXcqvwkDfUOB/edit

* https://www.1point3acres.com/bbs/thread-898653-1-1.html (all)

* https://www.1point3acres.com/bbs/thread-923632-1-1.html (all)





* Max Length of Valid Server Cluster
* https://leetcode.com/discuss/interview-question/1636493/Amazon-or-OA-or-Max-Length-of-Valid-Server-Cluster
* https://www.youtube.com/watch?v=7rP2ys1DcxQ





# meta
* https://leetcode.com/discuss/interview-question/4384198/Meta-phone-screen-(US)-E4E5 (orig)
* https://leetcode.com/problems/valid-palindrome-ii/description/
* https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 






























# dp


# variable racing (dp)
* https://leetcode.com/problems/ugly-number-ii/




# Q grouping -> subset -> state
# group -> subset -> state -> dp
* https://leetcode.com/problems/ones-and-zeroes

# diff way to group
* 1. +/- to num -> group them
* 2. */divide to num -> group them
* 3. prop to num -> group them
* https://leetcode.com/problems/target-sum/


* # add extra item to cancel
* https://leetcode.com/problems/target-sum/
* [s(+) + s(-)] + s(+) - s(-) = tar + [s(+) + s(-)]


# brute force test case -> ans
* https://leetcode.com/problems/target-sum/






# dp overall architecture
# dfs step: cat -> state -> state_group -> state_out -> decision -> base -> cache
* https://leetcode.com/problems/target-sum/
* cat 
* state_raw
* state_extend
* state_dp
* state_out
* decision 
* base 
* cache
 
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/
* cat: 0/1 unbound
* state_raw: tar, item
* state_extend: leftout
* state_dp: seeking_state, curr_state, leftout_state, fu_state
* state_out: valid('' or normal) OR invalid('0')
* decision: take/!
* base
* cache
 
* https://leetcode.com/problems/ones-and-zeroes/
* cat 
* state_raw
* state_extend
* state_dp
* state_out
* decision 
* base 
* cache

* https://leetcode.com/problems/number-of-ways-to-earn-points
* cat: 0/1, unbound
* state_raw: question type, max question, tar, single_q_mark
* state_extend: curr_mark = single_q_mark * correct_question_num, leftout = tar - curr_mark
* state_dp: seeking_s, curr_s, leftout_s, fu_s
* state_out: times (num of ways)
* decision: take/!
* base: q_type, max_q, tar
* cache








# diff way compress dp
# dfs -> 2D -> 1D (min/max)
# 1. dfs: square leftout
# 2. 2D dp: tar (min/max) -> each_item
# 3. 1D dp: compress each_item
* https://leetcode.com/problems/perfect-squares/

# 1. dfs: pow leftout
# 2. 2D dp: tar (min/max) -> each_item
# 3. 1D dp: compress each_item
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target


# dfs -> 2D -> 1D (times)
# 1. dfs: tar leftout
# 2. 2D dp: each_item (times) -> tar
# 3. 1D dp: compress each_item
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/description/

# 1. dfs: tar leftout
# 2. 2D dp: each_item(times) -> tar
# 3. 1D dp; compress each_item
* https://leetcode.com/problems/target-sum/


# dfs -> 3D -> 2D
https://leetcode.com/problems/ones-and-zeroes




# dp arr, key val relationship
# 1. dp tar -> times
# 2. dp tar -> min/max
* https://leetcode.com/problems/target-sum



# dp key gen new key
* https://leetcode.com/discuss/interview-question/2688170/New-OA-Question:-Bags-of-Rice


# dp each D rela
# take: i -> rest D leftout
# !take: i-1 -> rest D curr_max (normal)
* https://leetcode.com/problems/ones-and-zeroes

# take: i -> rest D leftout
# !take: i-1 -> rest D prev_max (special)
* https://leetcode.com/problems/number-of-ways-to-earn-points



# dp key abstract
# dp key str abstract
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/description/

# dp key func abstract (# zero / # one)
* https://leetcode.com/problems/ones-and-zeroes







# dp init
# dp init start -> valid
* https://leetcode.com/problems/target-sum/
* https://leetcode.com/problems/ones-and-zeroes
  
# dp init rest -> invalid
* https://leetcode.com/problems/target-sum/
* https://leetcode.com/problems/ones-and-zeroes


# dp init tar, in loop
# dp[i][0][j] = 1, in loop
# dp[i][0] = 1, in loop
# dp[0] = 1, in loop
* https://leetcode.com/problems/number-of-ways-to-earn-points
* * https://www.geeksforgeeks.org/subset-sum-problem-dp-25/ (2D dp)

# dp init tar, once (normal)
# dp[0][0] = 1, once
* https://leetcode.com/problems/number-of-ways-to-earn-points/description/


# dp init === 0 --> op below --> op + dp[i][j]
# dp init === 1 --> no op below --> dp[i][j]
* https://leetcode.com/problems/number-of-ways-to-earn-points/
* https://leetcode.com/problems/ones-and-zeroes

# 2D dp -> 2 loop init -> 1 backup overwrite
* https://leetcode.com/problems/target-sum/






# ind = -1, outbound
# ind = ns.le, outbound
* https://leetcode.com/problems/target-sum




# dfs base
# 1. tar top, !involve ind
# 2. ind top, involve ind
* https://leetcode.com/problems/number-of-ways-to-earn-points/



# dp base
# 1. build num -> 0
# 2. build num str -> ''
# 3. build str -> ''
# 4. etc
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/description/



# dp mem/cache
# dfs, dp use same arr mem
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/

# 1. mem arr === faster
# 2. hash === slower
* https://leetcode.com/problems/partition-equal-subset-sum/

# 1. dfs -> no return -> g_var
# 2. dfs -> return -> cache
* https://leetcode.com/problems/target-sum

# subset dp under fullset dp
* https://leetcode.com/discuss/interview-question/2688170/New-OA-Question:-Bags-of-Rice
  
# Q constraint to dp[][]
* https://leetcode.com/discuss/interview-question/2688170/New-OA-Question:-Bags-of-Rice
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/








# loop layout: follow semantic
# * each_item -> tar (times)
# * each_item -> tar -> freq (times)
# * tar -> each_item (min/max)
# * item A -> item B -> item C
* https://leetcode.com/problems/target-sum/
* https://leetcode.com/problems/ones-and-zeroes
* https://leetcode.com/problems/number-of-ways-to-earn-points
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers

# 2D tar item switch
* https://www.geeksforgeeks.org/subset-sum-problem-dp-25/


# loop layout ind
# 3D: 1st loop, 3rd loop ind=0 (sync each)
* each_item loop (i=0) ---> tar loop (j=1) ---> freq loop (k=0);
* https://leetcode.com/problems/number-of-ways-to-earn-points

# 2D: 1st loop ind=1, 2nd loop ind=0
* each_item loop (i=1) ---> tar loop (j=0)
* https://leetcode.com/problems/number-of-ways-to-earn-points



# dp single loop ind
# state loop ind impact
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/description/
* https://leetcode.com/problems/ones-and-zeroes
* e.g. dp[i], cost[i-1]

# 1. dfs param ind -> know which up to
# 2. dfs internal loop -> always start 
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/
* https://leetcode.com/problems/perfect-squares/
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/

# 1D dp always uses tar ind
https://leetcode.com/problems/number-of-ways-to-earn-points/


# dp init ind=0 already, state loop use ind=1
* https://www.geeksforgeeks.org/subset-sum-problem-dp-25/
  

# dp ind: item, tar, bound
sm:
* item
* tar
* bound

sm:
* item ind=0; dfs_ind = 1
* item ind=0; other use ind=0
* can be missing

* tar can 0/1, dep constraint
* constraint_tar = 1, tar = 0 (special)
  
* curr_item / natural_item / special_item as bound


https://leetcode.com/problems/ones-and-zeroes
* 3D_full
* for(let i=1; i<=len; ++i); item ind; dfs_ind = 1
* for(let j=m; j>=0; --j); j_tar; ind can 0
* for(let k=n; k>=0; --k); k_tar; ind can 0

* 2D
* same


https://leetcode.com/problems/perfect-squares
* 2D_full
* no item ind
* for(let i=1; i<=tar; ++i); natural_num as bound
* for(j=item_num; j>=1; --j); sqr_root_item as bound

* 1D
* same


https://leetcode.com/problems/target-sum/
* 2D_full
* for(let i=1; i<=n; ++i); item ind, dfs_ind = 1
* for(let j=0; j<=half; ++j); tar; ind can 0

* 1D
* for(let j=half; j>=curr_item; --j); curr_item as bound


https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target
* 1D
* for(let i=1; i<=tar; ++i); tar ind can't 0
* for(let j=0; j<arr.length; ++j); item ind can 0, other use ind=0


https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers
* 1D
* no item ind
* for(let i=1; i<=n; ++i); natural_num as bound
* for(let j=tar; j>=1; --j); tar; ind can't 0


* https://leetcode.com/problems/number-of-ways-to-earn-points
* 2D_full
* for(let i=1; i<=n; ++i); item ind, dfs_ind = 1
* for(let j=0; j<=tar; ++j); tar; ind can 0 (special)
* for(let k=1; k<=max_freq; ++k); natual_num as bound





# state loop type
# natural bottom up ---> local_loop
* https://leetcode.com/problems/perfect-squares/
* 1. bi-deci
* 2. few-deci
* 3. multi-deci(*)




# recur === 1 state loop
* https://leetcode.com/problems/ones-and-zeroes




# dp item
# state: tar, item(ind, num, pow, etc)
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/
* https://leetcode.com/problems/perfect-squares/


# dp tar
# imply dp tar/item val
https://leetcode.com/problems/perfect-squares/

# sum each_item < tar
* https://leetcode.com/problems/target-sum/



# dp item and dp tar

# dfs item inc, tar desc
# 1. item inc, tar desc (normal)
# 2. ....
# 3. ....
* https://leetcode.com/problems/target-sum
* https://leetcode.com/problems/number-of-ways-to-earn-points/
  


# state op
# 2D -> dp[i][j]
# 1D -> dp[i]
* https://leetcode.com/problems/target-sum/

# 1. full_d, take === prev each_item
# 2. rest_d, take === curr each_item
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/description/
* https://leetcode.com/problems/perfect-squares/
* https://leetcode.com/problems/number-of-ways-to-earn-points



# how to update state
# !compress: ntake == prev; compress: ntake == orig

# simple or 1D: 1 or 2 way
# complex or ND: N way / seq update / param tree

# loop_take --> full_d / dfs, acc + take


* https://leetcode.com/problems/ones-and-zeroes
* dfs: take vs ntake --> (1 way)

* 3D_full: if ntake (prev) vs take; else ntake (prev) --> (2 way)

* 2D: if ntake (orig) vs take; else ntake (orig) --> (2 way)

* 1D: x, because tar splits into 2



* https://leetcode.com/problems/perfect-squares
* dfs: take vs ntake --> (1 w)

* 2D_full: ntake (prev) vs take; else ntake --> (2 w)

* 1D: ntake (orig) vs take --> (1 w)



* https://leetcode.com/problems/target-sum
* dfs: take + ntake --> (1 w)

* 2D_full: ntake (prev) vs take; else ntake (prev) --> (2 w)

* 1D: ntake (orig) + take --> (1 w)




* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target
* dfs: (param tree)

* 2D_full: o_state = take; else o_state = ntake (orig, str) --> (2 w)

* 1D: o_state = take; else o_state = ntake (orig) --> (2 w)



* https://leetcode.com/discuss/interview-question/2688170/New-OA-Question:-Bags-of-Rice
* dfs: ?

* 2D: ?

* 1D: o_state = ntake (orig) + take --> (1 w)




* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers

 
* dfs: ?
 
* 2D_full: if ntake (prev) + take; else ntake (prev) --> (2 w)

* 1D: ntake (orig) + take --> (1 w)




* https://leetcode.com/problems/number-of-ways-to-earn-points

* dfs:
* s1: res = acc + ntake
* s2: res = acc + take (loop) --> (loop_take, seq update)


* 3D_full:
* s1: o_state = take 
* s2: o_state = orig + ntake --> (loop_take, seq up)

 
* 2D_full:
* s1: o_state = orig + ntake
* s2: o_state = orig + take (loop) --> (loop_take, seq up)

 
* 1D:
* o_state = ntake (orig) + take --> (1 way)



# dp state !rela, out of state loop
* https://leetcode.com/problems/number-of-ways-to-earn-points/

# dfs #param  === # state loop
* https://leetcode.com/problems/number-of-ways-to-earn-points/
  

# +/- way update state
# 1. state op +/-, 0 -> tar, always positive
# 2. state op +, 0 -> tar or tar -> 0, may be positive
* https://leetcode.com/problems/target-sum




# state ind op
# dp key op: who? op who?
* https://leetcode.com/problems/ones-and-zeroes
* 1 + dp[j-zero][k-one], who is j, who is one, who is k, who is one


# state ind movement
# repeat pick ind movement
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target
* 1. dfs(i, tar-cost) ---> repeat pick
* 2. dfs(i-1, tar)
 
# !repeat pick ind movement
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target
* 1. dfs(i-1, tar-cost) === !repeat pick
* 2. dfs(i-1, tar)
 
# 1. ntake -> dfs(i-1, tar) -> !inf loop
# 2. ntake -> dfs(i, tar) -> !inf loop
* https://leetcode.com/problems/target-sum



# state self
# state_extend: any logical combo
# state_extend: any hidden state
* https://leetcode.com/problems/number-of-ways-to-earn-points/
* num_of_q, curr_mark = num_of_q * point_each_q, leftout = tar - curr_mark

# state (quant)
# quant === state_val_vary
# quant === can compress
* https://leetcode.com/problems/number-of-ways-to-earn-points
* tar (qu, va), types (qu, va), max_num_of_q (qu, va), point_each_q (!qu)

# each iteration --> state of that time --> less max_state
* https://leetcode.com/problems/number-of-ways-to-earn-points






# state func return
# state func return: valid(init / normal) OR invald
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target

# abstract func to return state
* 1. good: state compare
* 2. bad: couple leftout_state and curr_state
 
# dfs return multi types (e.g. 0 == good, false == bad)
* https://leetcode.com/problems/ones-and-zeroes

# dfs return condi --> control op / param
* https://leetcode.com/problems/ones-and-zeroes




# build num direction
# 1. build num from R to L, largest digit (greedy)
# 2. build num from R to L, smallest digit (!greedy, !correct)
# 3. build num from L to R, !stable num largest
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target

# build num len
# build num len: surprise, exc.len > inc.len use
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target





# post order ops
# vars present -> param tree
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target

# param tree -> simplify -> core param (e.g. ind) <----
* https://leetcode.com/problems/target-sum


# too big -> str
# too big -> MOD
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers
* https://leetcode.com/problems/number-of-ways-to-earn-points

# 1. dfs % MOD (x)
# 2. (a+dfs) % MOD ---> when cal MOD
* https://leetcode.com/problems/number-of-ways-to-earn-points/



# return dp[i][j][k]
# 1. dp[tar] --> dp[tar]
# 2. dp[n][half] --> dp[bound][tar]
# 3. dp[n-1][tar][freqs[n-1]] --> dp[last_item][tar][last_item] (ind=0)
* https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target (1)
* https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/ (1)
* https://leetcode.com/problems/target-sum (2)
* https://leetcode.com/problems/ones-and-zeroes (2)
* https://leetcode.com/problems/number-of-ways-to-earn-points (3)









# who can reduce
# 1. str.reduce (x)
# 2. arr.reduce (*)
* https://leetcode.com/problems/ones-and-zeroes/




# pick/!
* Minimum subset sum difference (x)
* https://leetcode.com/problems/number-of-great-partitions/ (x)
* https://leetcode.com/problems/count-primes/description/ (x)





* https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-x/ ====> https://leetcode.com/problems/partition-equal-subset-sum/ (2 subsets)
* https://leetcode.com/discuss/interview-question/1271034/count-no-of-subsets-with-given-difference-dp ====> https://leetcode.com/problems/partition-equal-subset-sum/ (2 subsets)
* arr[0] === 0 -> dp[0][0] = 2
* arr[0] !== 0 -> dp[0][0] = 1
* in range -> dp[0][arr[0]] = 1






# compress n, not tar
# 2D outter: n ---> inner: tar (uncompress)
# 1D outter: n ---> inner: tar (compress)
* https://www.geeksforgeeks.org/subset-sum-problem-dp-25/








# num consumed left out
* https://leetcode.com/problems/ugly-number (num consumed left out)



# bottom up (to pow)
# bottom up (to sqr_root)
# bottom up (to tar/sum)
# bottom up (to ?)
* https://leetcode.com/problems/valid-perfect-square/
 
 
* https://leetcode.com/problems/substring-with-largest-variance/ (orig)

* https://leetcode.com/problems/maximum-subarray/











# slide window


# how to detect slide win

# 1. sorted / unsorted slide win
# 2. diff / same ele slide win
# 3. containt win range, do op
# 4. substring: (1) no repeat; (2) bad word
* https://leetcode.com/problems/longest-substring-without-repeating-characters/
* https://leetcode.com/problems/length-of-the-longest-valid-substring/
* https://leetcode.com/problems/sliding-window-maximum/
* https://leetcode.com/problems/frequency-of-the-most-frequent-element/description/



# how to diff dfs and slide_win
# 1. both relate to operation
# 2. both relate to min/max
# 3. slide_win focus on continous window
* https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/





# slide_win portion
# 1. full arr = slide_win + right_side
# 2. full arr = left_side + slide_win
# 3. full arr = left_side + slide_win + right_side
* https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/

# work on mid portion or work on left/right portion
* https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/






# op within win range
# 1. fill smaller eles match max
# 2. get single max
# 3. substr
* https://leetcode.com/problems/frequency-of-the-most-frequent-element/description/


  

# manual (max_queue) VS auto (max_piority_queue)
* https://leetcode.com/discuss/interview-question/1636493/Amazon-or-OA-or-Max-Length-of-Valid-Server-Cluster (manual)
* https://leetcode.com/problems/maximum-number-of-robots-within-budget (auto)


# manual max queue
# 1. manual max_queue === ambigious order
# 2. big num will crush small
# 3. small cannot move far
# 4. max on left edge, no care rest
* https://leetcode.com/discuss/interview-question/1636493/Amazon-or-OA-or-Max-Length-of-Valid-Server-Cluster


  


# !sync
# 1. max_x_queue !sync win_subset
# 2. max_x_queue just retain max, rest no care
* https://leetcode.com/discuss/interview-question/1636493/Amazon-or-OA-or-Max-Length-of-Valid-Server-Cluster
* https://leetcode.com/problems/maximum-number-of-robots-within-budget

# 1. when expand: max_x_queue !sync win
# 2. when shrink: max_x_queue !sync win
# 3. max_x_queue just retain max, rest no care
* https://leetcode.com/discuss/interview-question/1636493/Amazon-or-OA-or-Max-Length-of-Valid-Server-Cluster
* https://leetcode.com/problems/maximum-number-of-robots-within-budget

# start_win !syc max_p_q
* https://leetcode.com/problems/longest-substring-without-repeating-characters



# sync
# 1. start_win sync hash
# 2. left and right update 1st -> use them
# 3. win_size <-> queue_size <-> left and right
* https://leetcode.com/problems/longest-substring-without-repeating-characters
* abcdefca (keep adding mem) --> c again -> (abc)defca (clean up prev mem) -> defca -> (a again, prev mem out, no concern)




# win r ~= substr exclude end, cal dist
* https://leetcode.com/discuss/interview-question/1636493/Amazon-or-OA-or-Max-Length-of-Valid-Server-Cluster





# slide win code layout
# 1. start -> expand -> shrink
# 2. start -> shrink -> expand
* https://leetcode.com/problems/longest-substring-without-repeating-characters




# how slide_win scan
# 1. right expand, left shrink
# 2. set up bound, scan -> new bound, scan
# 3. i stable -> slide_win (j_loop)
* https://leetcode.com/problems/longest-substring-without-repeating-characters (left, right)
* https://leetcode.com/problems/sliding-window-maximum/ (left, right)
* https://leetcode.com/problems/frequency-of-the-most-frequent-element/ (left, right)
* https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/ (left, right)
* https://leetcode.com/problems/length-of-the-longest-valid-substring (i stable, j loop)
* https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/ (can be i stable, j loop)

  

# how to scan substr
# 1. start right -> scan right -> see pollution -> immediate stop (-1 skip) -> new range (*)
# 2. start right -> scan right (guarantee good)
# 3. start right -> scan right (history good, 1 extra: 1. if good, full_len; 2. if bad, continue)
# 4. start left ->  scan right -> see pollution -> find start char to cut (x)
* https://leetcode.com/problems/length-of-the-longest-valid-substring/description/



# when to shrink
# 1. > sum
# 2. > len
# 3. seen (hash)
# 4. imply formula
# 4. multi combo formula
* https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero (> sum)
* https://leetcode.com/problems/longest-substring-without-repeating-characters (seen)
* https://leetcode.com/problems/sliding-window-maximum (> len)
* https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists (imply formula)
* https://leetcode.com/problems/maximum-number-of-robots-within-budget (combo formula)
* https://leetcode.com/discuss/interview-question/1636493/Amazon-or-OA-or-Max-Length-of-Valid-Server-Cluster (combo formula)



# max win_size
# 1. win_subset > tar: max win_size (*)
# 2. win_subset >= tar: ........... (x)
* https://leetcode.com/problems/maximum-number-of-robots-within-budget

# max clean_up
# 1. max_p_q_ind < win_start: ............. (x)
# 2. max_p_q_ind <= win_start: max clean up (*)
* https://leetcode.com/problems/maximum-number-of-robots-within-budget




 




# shirnk while (condi), update in loop body
* https://leetcode.com/problems/sliding-window-maximum/



# the reason of expand
# 1. can see k elements each time
* https://leetcode.com/problems/sliding-window-maximum/


# the purpose of win
# 1. get max num within k elements
# 2. longest substr not contain words
* https://leetcode.com/problems/sliding-window-maximum/
* https://leetcode.com/problems/length-of-the-longest-valid-substring/



# 1. max_p_queue: store by ind -> later cut
# 2. max_p_queue: sort by val -> ind random
* https://leetcode.com/problems/maximum-number-of-robots-within-budget

# start_win cut off max_p_queue
* https://leetcode.com/problems/maximum-number-of-robots-within-budget
  


# r+1 for next iteration
* https://leetcode.com/discuss/interview-question/1636493/Amazon-or-OA-or-Max-Length-of-Valid-Server-Cluster


# inc r vs win_size_check
# 1. inc r before size check (x)
# 2. inc r after size check (*)
* https://leetcode.com/problems/longest-substring-without-repeating-characters




# when to check win_size
# 1. 1 expand, 1 check win_size
# 2. when finish shrink, check win_size
# 3. when finish expand, check win_size
* https://leetcode.com/problems/longest-substring-without-repeating-characters
* https://leetcode.com/problems/length-of-the-longest-valid-substring/description/

# r - l + 1 appear max win size
* https://leetcode.com/problems/frequency-of-the-most-frequent-element/description/


# after 1 iteration, test win_size
* https://leetcode.com/discuss/interview-question/1636493/Amazon-or-OA-or-Max-Length-of-Valid-Server-Cluster







# slide_win type
# 1. slide_win
# 2. slide_win + max_p_queue (auto)
# 3. slide_win + arr (manual)
# 4. slide_win + hash
* https://leetcode.com/problems/maximum-number-of-robots-within-budget
* https://leetcode.com/problems/longest-substring-without-repeating-characters/






  


# slide_win: expand, equal, shrink
* https://leetcode.com/problems/sliding-window-maximum/

# expand
# ...
* https://leetcode.com/problems/sliding-window-maximum/

# equal
# shrink loop, include equal, can pick output
* https://leetcode.com/problems/sliding-window-maximum/

# shrink
# ...
* https://leetcode.com/problems/sliding-window-maximum/



# how much shrink
# 1. shrink 1 by 1
# 2. shrink by range
* https://leetcode.com/problems/sliding-window-maximum/
* https://leetcode.com/problems/longest-substring-without-repeating-characters/






# how many pointer pt slide_win
# 1. l == start_win, r == new income
# 2. l == start_win, r == new income, hash[c] == repeat
* https://leetcode.com/problems/sliding-window-maximum/
* https://leetcode.com/problems/longest-substring-without-repeating-characters/


# l position repeat
# 1. l before repeat: find repeat, then skip 1
# 2. l equal repeat: find repeat, then skip 1
# 1. l after repeat: as usual
* https://leetcode.com/problems/longest-substring-without-repeating-characters/


# win l and r are ind, not bound
* https://leetcode.com/problems/length-of-the-longest-valid-substring

# 1. n-1 === ele ind
# 2. n === bound (*)
* https://leetcode.com/problems/length-of-the-longest-valid-substring


# what to maintain window
# 1. maintain l and r
# 2. l <= r
# 3. also maintain real win
* https://leetcode.com/problems/length-of-the-longest-valid-substring/description/
* https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/ (l <= r)  



# max_p_q store key
# 1. max_p_queue.front() === ind
# 2. charge[max_p_queue.front()] === val
* https://leetcode.com/problems/maximum-number-of-robots-within-budget



# clean up mem VS retain mem
# 1. clean up prev mem, can repeat process
# 2. no clean up, consider start_win >/</= repeat
* https://leetcode.com/problems/longest-substring-without-repeating-characters
* abcdefca (keep adding mem) --> c again -> (abc)defca (clean up prev mem) -> defca -> (a again, prev mem out, no concern)




# diff way to use hash
# 1. hash[key] = visited
# 2. hash[val] = position
* https://leetcode.com/problems/longest-substring-without-repeating-characters/



# set.del
set.delete(ele) === del curr repeat
set.delete(s[l]) === del all pre-head
* https://leetcode.com/problems/longest-substring-without-repeating-characters




# 1. sort -> { return a-b } -> asc
# 2. sort -> { return b-a } -> desc
# 3. sort -> { a-b } -> nothing return
* https://leetcode.com/problems/maximum-number-of-robots-within-budget






# see arr of word
# 1. scan arr
# 2. scan trie
* https://leetcode.com/problems/length-of-the-longest-valid-substring/description/




# how to deal substr
# 1. outloop: each time new range
# 2. inloop: scan
* https://leetcode.com/problems/length-of-the-longest-valid-substring/description/




# loop bound
# 1. loop bound === constant
# 2. loop bound === variable (update on the fly)
* https://leetcode.com/problems/length-of-the-longest-valid-substring/description/

# win right bound will update in process
* https://leetcode.com/problems/length-of-the-longest-valid-substring









# priority queue


# how to detect priority queue
# 1. min_start in queue
* https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/


# p_q full props
# 1. compare: func (2 ele)
# 2. priority: func (1 ele)
# 3. q.enqueue (end)
# 4. q.dequeue (start)
# 5. q.front.element (obj)
# 6. q.back.element (obj)
# 7. q.size
* https://leetcode.com/problems/sliding-window-maximum/

  

# min_start into p_q
# 1. every min_start: min range
# 2. put max_end: !control range
# 3. put everything: !control range 
* https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/description/

# min_starts cover range
* https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/description/



# p_q: store which list, which ele (2D)
* https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/description/


# queue front and back
# 1. m_p_q (queue) -> front (posi) -> element (obj)
# 2. m_p_q (queue) -> back (posi) -> element (obj)





  
# queue init, so can run
* https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/description/














# trie


# trie === util + node
* https://leetcode.com/problems/length-of-the-longest-valid-substring

# trie node attr
# 1. children
# 2. count
# 3. end
# etc
* https://leetcode.com/problems/length-of-the-longest-valid-substring

# trie node children === next === edge
* https://leetcode.com/problems/length-of-the-longest-valid-substring





# create node process
# init root -> access root -> to group -> to individual -> to next
* https://leetcode.com/problems/length-of-the-longest-valid-substring

# node mirror char journey
* https://leetcode.com/problems/length-of-the-longest-valid-substring

# see in node path: 1. create; 2. blocked; 3. end
* https://leetcode.com/problems/length-of-the-longest-valid-substring

# some var ahead, end loop still valid
* https://leetcode.com/problems/length-of-the-longest-valid-substring

# 1. node advance
# 2. char advance
* https://leetcode.com/problems/length-of-the-longest-valid-substring




# travel node process
# access root -> to group -> to individual -> to next
* https://leetcode.com/problems/length-of-the-longest-valid-substring

# 1. node advance
# 2. char advance
* https://leetcode.com/problems/length-of-the-longest-valid-substring




# in 1st node
# 1. root in 1st node
# 2. children in 1st node
* https://leetcode.com/problems/length-of-the-longest-valid-substring

# var pt to what var pt to
* https://leetcode.com/problems/length-of-the-longest-valid-substring











# multi lists


# order list
* https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/description/


# each ele in list, represent list
* https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/description/


# next ele in list, may be candidate
* https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/description/



# p_q dequeue list, next ele may impact range
* https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/description/


# p_q enqeue list, auto sort, diff inject position, impact range
* https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/description/








# prefix sum
# 1. loop -> a[i] = a[i] + a[i-1] (cal prefix sum)
# 2. range: 0 -> nth (cal range)
# 2.1. range: [i, j] -> a[j] - a[i-1] (cal range)
* https://www.youtube.com/watch?v=pVS3yhlzrlQ










# loop body

# while loop body, best update min/max
* https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/description/





# meaning of sort
# similar kind in subarr
* https://leetcode.com/problems/frequency-of-the-most-frequent-element/description/





# guard then use
* https://leetcode.com/problems/frequency-of-the-most-frequent-element/description/







# how to think
# think good condition -> then back to constraint
* https://leetcode.com/problems/frequency-of-the-most-frequent-element/description/

# not think straight, but think opposite
* https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/

  
