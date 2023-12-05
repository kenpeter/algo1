
# https://leetcode.com/problems/number-of-ways-to-earn-points/description/

## dp[i][j - coins[i]][k - 1];
## dp[i - 1][j][freqs[i - 1]]

* take: i -> rest dimension leftout
* !take: i-1 -> rest dimension orig


## special
## 1st update, dp[i][j][k] = take
## 2nd update, dp[i][j][k] = take + !take

## normal
## if dp[i][j] = orig + take
## else dp[i][j] = dp[i-1][j]


## some has op, some doesn't
* op + dp[i][j] (op)
* dp[i][j] (no op)


## each iteration --> state of that time --> cannot use max_state


## coin_change extend, coin has max_freq
