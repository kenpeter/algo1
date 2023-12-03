* each iteration --> 1 state
* coin_change extend, coin has max_freq



# https://leetcode.com/problems/number-of-ways-to-earn-points/description/
## dp[i][j][k] = dp[i][j - coins[i]][k - 1];


* i curr_coin
* i-1 prev
* i+1 next
* s: take curr coin, i must use


* j == tar
* j - curr_coin prev
* j + curr_coin (x)
* s: j - curr_coin (single_coin, ALA rep state); freq later cover;
* s: i == curr_coin (diff), j - curr (similar), k - 1 (similar)


* k == freq
* k - 1 prev  
* k + 1 (x)
* s: i == curr_coin (diff), j - curr (similar), k - 1 (similar)



* op + dp[i][j] (op)
* dp[i][j] (no op)





* why take coin update dp[i][j][k]?



## dp[i][j][k] = (dp[i][j][k] + dp[i - 1][j][freqs[i - 1]]);


* i curr_coin
* i-1 prev coin
* i+1 next coin
* s: !take curr_coin, i must !use, so prev_coin contrib


* j == tar
* j - curr_coin == take item == no move criti_ind
* j + curr_coin (x)
* s: !take curr_coin, no j - curr_coin; j remain


* k == freq
* k - 1 == take item == !move criti_ind (*);  
* k + 1 == (!possible)
* s: i == curr_coin (diff), j - curr (similar), k - 1 (similar)

