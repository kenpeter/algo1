
# https://leetcode.com/problems/number-of-ways-to-earn-points/description/


## dp[i][j - coins[i]][k - 1];
## dp[i - 1][j][freqs[i - 1]]


## normal dp ind rela
## take: i -> rest D leftout
## !take: i-1 -> rest D curr_max
* https://leetcode.com/problems/ones-and-zeroes


## special dp ind rela
## take: i -> rest D leftout
## !take: i-1 -> rest D prev_max
* https://leetcode.com/problems/number-of-ways-to-earn-points



## normal dp action
## if dp[i][j] = orig + take
## else dp[i][j] = dp[i-1][j]
* https://leetcode.com/problems/number-of-ways-to-earn-points

## special dp action
## 1st update, dp[i][j][k] = take
## 2nd update, dp[i][j][k] = take + !take
* https://leetcode.com/problems/number-of-ways-to-earn-points




## some has op, some doesn't
* op + dp[i][j] (op)
* dp[i][j] (no op)
* https://leetcode.com/problems/number-of-ways-to-earn-points


## each iteration --> state of that time --> cannot use max_state
* https://leetcode.com/problems/number-of-ways-to-earn-points/description/


## coin_change extend, coin has max_freq
* https://leetcode.com/problems/number-of-ways-to-earn-points/description/