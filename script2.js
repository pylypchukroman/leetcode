// 219. Contains Duplicate II

// const containsNearbyDuplicate = function(nums, k) {
//     let result = false;
//     for (let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
//                 result = true;
//             }
//         }
//     }
//     return result;
// };
//
// console.log(containsNearbyDuplicate([1,2,3,1],3))

// const containsNearbyDuplicate = function(nums, k) {
//     const hash = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (hash.hasOwnProperty(nums[i]) && (i - hash[nums[i]]) <= k) {
//             return true;
//         } else {
//             hash[nums[i]] = i;
//         }
//     }
//     return false;
// };
//
// console.log(containsNearbyDuplicate([1,2,3,1],3))/
//////////////////////////////
