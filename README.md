# start+ -> end+, dfs contrib

https://leetcode.com/problems/unique-paths/ * (start -> end + 1, contrib)
https://leetcode.com/problems/unique-paths-ii/ * (start -> end +1, block, contrib)
https://www.hackerrank.com/challenges/possible-path/problem * (x start -> x end +1, contrib)
https://leetcode.com/discuss/interview-question/301192/Facebook-or-Phone-screen-or-Shortest-Path-with-Obstacles * (x start -> x end+1, contrib)
https://leetcode.com/discuss/interview-question/1235202/Amazon-or-Onsite-or-Determine-Path * (x start -> x end+1, contrib)
https://leetcode.com/problems/out-of-boundary-paths/ * (start -> end, contrib, struct_dep_state)

# start+ -> end+, dfs contrib, start each cell
https://leetcode.com/discuss/interview-question/2024008/Similar-to-unique-paths-Interview-Question * (start each cell -> end+1, contrib)
https://gist.github.com/kanglicheng/75ae38967dc7e10a744ebb79bca2b335 * (start each cell -> end+1, contrib)
https://leetcode.com/problems/unique-paths-iii/ * (start+1 -> end, top down, each cell)
https://www.geeksforgeeks.org/unique-paths-covering-every-non-obstacle-block-exactly-once-in-a-grid/ * (start+1 -> end, top down, each cell)

# start+ -> end+, dfs, each step 
https://leetcode.com/problems/word-search/ * (dfs, start+ -> end+, match each step)
https://leetcode.com/problems/longest-increasing-path-in-a-matrix/ * (dfs, start+ -> end+, inc each step)

# start+ -> end+, total len, bfs best place
https://leetcode.com/problems/shortest-path-to-get-food * (bfs, x start -> end+, best place)
https://leetcode.com/problems/shortest-path-in-binary-matrix/ * (bfs, start -> end, best place)
https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid * (bfs, start -> end, best place, curr_cell connect future_cell)

# start+ -> end+, total len
https://leetcode.com/problems/minimum-path-sum/ * (dfs, start -> end, g_cache(*), g_seen(*), total len)
https://leetcode.com/problems/path-with-maximum-gold/ * (dfs, start+ -> end+, g_cache(x), g_seen(*), total len)



https://leetcode.com/problems/minimum-path-cost-in-a-grid/
https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/
https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/description/
https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/


# path inc; path with val
https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/ *
https://leetcode.com/problems/swim-in-rising-water/ *

 

# path same dir moving

https://leetcode.com/problems/the-maze/ *
https://leetcode.com/problems/the-maze-ii/ *
https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/ *

 

# empty cells to target cellls

https://leetcode.com/problems/walls-and-gates/ *
https://leetcode.com/problems/01-matrix/ *
https://leetcode.com/problems/rotting-oranges/ *

 

#robot clean

https://leetcode.com/problems/robot-room-cleaner/ *
https://leetcode.com/problems/shortest-path-in-a-hidden-grid/ *
https://leetcode.com/problems/minimum-path-cost-in-a-hidden-grid/ *
https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/ *

 

# robot back to origin

https://leetcode.com/problems/robot-bounded-in-circle/ * (infinite cycle: 1. back to orig; 2. or after 1 cycle, !North)
https://leetcode.com/problems/robot-return-to-origin/description/ * (L and R consumed in hash; TOP an BOTTOM consumed in hash)



#min value in maxi (x)

https://leetcode.com/problems/find-the-safest-path-in-a-grid/description/ (x)
https://leetcode.com/problems/path-with-minimum-effort/ (x)
https://leetcode.com/problems/path-with-maximum-minimum-value/ (x)


# matrix (x):

https://leetcode.com/problems/search-a-2d-matrix/
https://leetcode.com/problems/search-a-2d-matrix-ii/
https://leetcode.com/problems/matrix-diagonal-sum/
https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/
https://leetcode.com/problems/grid-game/
https://leetcode.com/problems/spiral-matrix-ii/
https://leetcode.com/problems/transpose-matrix/description/
https://leetcode.com/problems/snakes-and-ladders/
https://leetcode.com/problems/maximal-square/description/

 

# tree travel

https://leetcode.com/problems/binary-tree-vertical-order-traversal/ * (vertical)
https://leetcode.com/problems/binary-tree-level-order-traversal/ * (horizontal, top to bottom)
https://leetcode.com/problems/binary-tree-level-order-traversal-ii/ * (horizontal, bottom to top)
https://leetcode.com/problems/n-ary-tree-level-order-traversal/ * (horizontal, children)
https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/ * (zigzag, left -> right, right -> left)
https://leetcode.com/problems/n-ary-tree-preorder-traversal/description/ * (pre-order, dfs)
https://leetcode.com/problems/n-ary-tree-postorder-traversal/ * (post-order, dfs)
https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/ x



# tree depth

https://leetcode.com/problems/average-of-levels-in-binary-tree/ * (bfs, with best place, sum)
https://leetcode.com/problems/minimum-depth-of-binary-tree/ * (bfs, with best place, depth)
https://leetcode.com/problems/maximum-depth-of-n-ary-tree/ * (dfs, left and right, getMaxH pattern)
https://leetcode.com/problems/maximum-depth-of-binary-tree/ * (dfs, children, getMaxH pattern)
https://leetcode.com/problems/balanced-binary-tree/ * (dfs, getMaxH pattern, compare each at same level)
https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/
https://leetcode.com/problems/time-needed-to-inform-all-employees/
https://leetcode.com/problems/diameter-of-binary-tree/ * (left and right; single node as center, left and right diameter)
https://leetcode.com/problems/diameter-of-n-ary-tree * (children; single node as center, left and right diameter)

https://leetcode.com/problems/cousins-in-binary-tree/
https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/
