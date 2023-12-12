// https://leetcode.com/discuss/interview-question/1636493/Amazon-or-OA-or-Max-Length-of-Valid-Server-Cluster

 

bootingPower = [3, 6, 1, 3, 4];

processPower = [2, 1, 3, 4, 5];

powerMax = 25;

 

const getPower = () => {

  let res = 0;

 

  // * b: l shrink

  // * b: r expand

  // * b: r === explode ind

  // * b: multi input arr, using same ind

  let l = 0;

  let r = 0;

 

  // * b: win val

  let process_sum = 0;

 

  // * b: max_queue shrink/expand <-> win_subset shrink/expand

  let boot_max_queue = [];

 

  while (r < bootingPower.length) {

    // * b: max_queue === ambigious order

    // * b: big num will crush small

    // * b: small cannot move far

    // * b: code max_queue then code win_subset

    // * b: max_queue shrink/expand <-> win_subset shrink/expand <-> rest

    while (

      boot_max_queue.length > 0 &&

      boot_max_queue[boot_max_queue.length - 1] < bootingPower[r]

    ) {

      boot_max_queue.pop();

    }

 

    // * b: small cannot move far

    boot_max_queue.push(bootingPower[r]);

 

    // * b: max on left edge, no care rest

    max_boot = boot_max_queue[0];

 

    // * b: max_queue shrink/expand <-> win_subset shrink/expand <-> rest

    process_sum = process_sum + processPower[r];

 

    // * b: max_queue shrink/expand <-> win_subset shrink/expand <-> rest

    // * b: win r ~= substr exclude end, cal dist

    // * b: r+1 for next iteration

    r = r + 1;

 

    // * formular

    let consmp = max_boot + process_sum * (r - l);

 

    // * b: 1. r_expand trigger l_shrink

    // * b: 2. l_shrink !trigger r_expand

    while (consmp > powerMax) {

      // * b: max_queue shrink/expand <-> win_subset shrink/expand <-> rest

      if (boot_max_queue[0] === bootingPower[l]) {

        boot_max_queue.shift();

      }

 

      // * b: max on left edge, no care rest

      max_boot = boot_max_queue[0];

 

      // * b: max_queue shrink/expand <-> win_subset shrink/expand <-> rest

      process_sum = process_sum - processPower[l];

      // * b: max_queue shrink/expand <-> win_subset shrink/expand <-> rest

      l = l + 1;

      // * formlar

      consmp = max_boot + process_sum * (r - l);

    }

 

    // * b: after 1 iteration, test win_size

    // * b: 1. r_expand trigger l_shrink

    // * b: 2. l_shrink !trigger r_expand

    res = Math.max(res, r - l);

  }

 

  console.log(res);

};

 

getPower();