
# https://leetcode.com/problems/number-of-ways-to-earn-points/description/

## dp[i][j - coins[i]][k - 1];
## dp[i - 1][j][freqs[i - 1]]

* take -> i -> rest dimension leftout
* !take -> i-1 -> rest dimension orig


## if take possible, dp[i][j][k] = take + !take
## if take !possible, dp[i][j][k] = orig + !take


## some has op, some doesn't
* op + dp[i][j] (op)
* dp[i][j] (no op)

## each iteration --> 1 state


## coin_change extend, coin has max_freq
