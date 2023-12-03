* each iteration --> 1 state
* coin_change extend, coin has max_freq



# https://leetcode.com/problems/number-of-ways-to-earn-points/description/
## dp[i][j][k] = dp[i][j - coins[i]][k - 1];


* i curr_coin
* i-1 prev coin
* i+1 next coin
* s: take curr coin, i must use


* j == tar
* j - curr_coin == take item == no move criti_ind
* j + curr_coin (x)
* s: j - curr_coin * freq (x);
* s: j - curr_coin (*), freq later cover. As long as represent state
* s: i == curr_coin (diff), j - curr (similar), k - 1 (similar)


* k == freq
* k - 1 == take item == !move criti_ind (*);  
* k + 1 == (!possible)
* s: i == curr_coin (diff), j - curr (similar), k - 1 (similar)



* op + dp[i][j] (op)
* dp[i][j] (no op)





* why take coin update dp[i][j][k]?



## dp[i][j][k] = (dp[i][j][k] + dp[i - 1][j][freqs[i - 1]]);


* i curr_coin
* i-1 prev coin
* i+1 next coin
* s: don't take curr_coin, i must !use, so prev_coin


* j == tar
* j - curr_coin == take item == no move criti_ind
* j + curr_coin (x)
* s: j - curr_coin * freq (x);
* s: j - curr_coin (*), freq later cover. As long as represent state
* s: i == curr_coin (diff), j - curr (similar), k - 1 (similar)


* k == freq
* k - 1 == take item == !move criti_ind (*);  
* k + 1 == (!possible)
* s: i == curr_coin (diff), j - curr (similar), k - 1 (similar)

