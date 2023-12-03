* each iteration --> 1 state
* coin_change extend, coin has max_freq



# https://leetcode.com/problems/number-of-ways-to-earn-points/description/
## dp[i][j][k] = dp[i][j - coins[i]][k - 1];


* i curr_coin
* i-1 prev coin
* i+1 next coin
* s: take curr coin, no move ind


* j == tar
* j - curr_coin == take item == no move criti_ind
* j + curr_coin (x)
* s: j - curr_coin * freq (x);
* s: j - curr_coin (*), freq later cover. As long as represent state


* k == freq
* k - 1 == take item == !move criti_ind (*);  
* k + 1 == (!possible)
* s: similar to tar - curr



* op + dp[i][j] (op)
* dp[i][j] (no op)


* relation of dp[][][]
* seeking_s: all curr
* leftout_s: i == curr_coin (diff), j - curr == leftout (similar), k - 1 == leftout (similar)




* why take coin update dp[i][j][k]?



## dp[i][j][k] = (dp[i][j][k] + dp[i - 1][j][freqs[i - 1]]);


* i curr_coin (*)
* i-1 prev coin (*)
* i+1 next coin


* j == tar
* j - curr_item == take item == !move criti_ind (*)
* j + curr_item (!possible)


* k == freq
* k - 1 == take item == !move criti_ind (*);  i == curr_coin (diff), j - curr == leftout (similar), k - 1 == leftout (similar)
* k + 1 == (!possible)



* relation of dp[][][]
* seeking_s: all curr
* seeking_s: all curr
* perv_s: prev_coin (diff), max_tar (similar), max_freq (similar)
* seeking_s = seeking_s + prev_s (acc)

