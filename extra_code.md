/*
// * s: similar question
// * s: https://leetcode.com/discuss/interview-question/2024008/Similar-to-unique-paths-Interview-Question
// * s: https://gist.github.com/kanglicheng/75ae38967dc7e10a744ebb79bca2b335

// * s: there is no close -1 region
const b1 = [
  [0, 0, 0, 0, -1],
  [0, -1, -1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, -1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

// * s: there is 1 close -1 region (with bound)
// * s: how to close a region
const b2 = [
  [0, 0, 0, 0, -1],
  [0, -1, -1, 0, 0],
  [0, 0, 0, 0, 0],
  [-1, -1, 0, 0, 0],
  [0, -1, 0, 0, 0],
  [0, -1, 0, 0, 0],
];

// * s: how can I make the 0s to become -1
const b3 = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, -1, -1, -1, -1, -1, 0],
  [0, -1, 0, 0, 0, -1, 0],
  [0, -1, 0, 0, 0, -1, 0],
  [0, -1, 0, 0, 0, -1, 0],
  [0, -1, -1, -1, -1, -1, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

// * s: if all of them are -1, we can color all of them, form a region
const b4 = [
  [0, 0, 0, 0, 0],
  [0, -1, -1, -1, 0],
  [0, -1, -1, -1, 0],
  [0, -1, -1, -1, 0],
  [0, 0, 0, 0, 0],
];

const b5 = [[0]];

const b6 = [
  [0, 0],
  [-1, 0],
];

const end1 = [0, 0];
const end2 = [5, 0];

const canReach = (b, end) => {
  const m = b.length;
  const n = b[0].length;

  // * s: mem
  let mem;
  // * s: path travel, will always repeat path
  let myset;

  const dfs = (i, j) => {
    // * s: bound
    if (i < 0 || j < 0 || i >= m || j >= n) return 0;

    // * s: avoid repeat
    if (myset.has(i + "_" + j)) return 0;
    myset.add(i + "_" + j);

    if (b[i][j] === -1)
      // * s: block
      return 0;

    // * s: cache
    if (mem[i][j] !== false) return mem[i][j];

    // * s: target
    if (i === end[0] && j === end[1]) return 1;

    // * s: grid travel === tree travel
    const r1 = dfs(i + 1, j);
    const r2 = dfs(i - 1, j);
    const r3 = dfs(i, j + 1);
    const r4 = dfs(i, j - 1);
    return (mem[i][j] = r1 + r2 + r3 + r4);
  }; // end func

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      // * s: reset
      mem = new Array(m).fill(false).map((_, i) => {
        return new Array(n).fill(false);
      });

      myset = new Set();

      // * s: block ignore
      if (b[i][j] === -1) continue;

      const out = dfs(i, j);
      if (out === 0) {
        return false;
      }
    } // end loop
  } // end loop

  // * s: mem should all fill
  return true;
};

// const o = canReach(b6, end1); // true
// const o = canReach(b1, end1); // true
// const o = canReach(b1, end2); // true
// const o = canReach(b2, end1); // false
// const o = canReach(b2, end2); // false
const o = canReach(b3, end1); // false

console.log(o);



*/
