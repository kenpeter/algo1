* each iteration --> 1 state
* coin_change extend, coin has max_freq
* op + dp[i][j] (op)
* dp[i][j] (no op)


# https://leetcode.com/problems/number-of-ways-to-earn-points/description/
## dp[i][j - coins[i]][k - 1];


* i curr
* i-1 prev
* i+1 next
* s: take -> i (curr item)


* j == tar
* j - curr prev
* j + curr next 
* s: take -> j - curr (leftout, similar)
* s: j - curr * freq (x, for 1D)


* k == freq
* k - 1 prev
* k + 1 next
* s: take -> k-1 (leftout, similar)




## dp[i - 1][j][freqs[i - 1]]


* i curr
* i-1 prev
* i+1 next
* s: !take -> i-1 (prev item)


* j == tar
* j - curr prev
* j + curr next 
* s: !take -> j (orig)


* k == freq
* k - 1 prev
* k + 1 next
* s: !take -> k (orig, freq_max)



## why take coin update dp[i][j][k]?
