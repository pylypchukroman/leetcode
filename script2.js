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

//409. Longest Palindrome

// const longestPalindrome = function(s) {
//     let result = 0;
//     let hash = {};
//
//     for (let char of s) {
//         hash[char] = (hash[char] || 0) + 1;
//         if (hash[char] % 2 === 0) result += 2;
//     }
//     return s.length > result ? result + 1 : result;
// };
//
// longestPalindrome("ccc");

//819. Most Common Word
// const mostCommonWord = function(paragraph, banned) {
//     const arr = paragraph.toLowerCase().split(/\W+/g).filter(x => !banned.includes(x));
//     const hash = {};
//     arr.forEach(word => hash[word] = (hash[word] || 0) + 1 );
//     const maxCount = Math.max(...Object.values(hash));
//     const word = (Object.keys(hash).filter(word => hash[word] === maxCount));
//     return word;
// };
// mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])


///////////////////////////////////////////////////
// function addBinary(a, b) {
//     let carry = 0;
//     let result = "";
//     let i = a.length - 1, j = b.length - 1;
//     while (i >= 0 || j >= 0 || carry) {
//         let sum = carry;
//         if (i >= 0) {
//             sum += parseInt(a.charAt(i));
//             i--;
//         }
//         if (j >= 0) {
//             sum += parseInt(b.charAt(j));
//             j--;
//         }
//         carry = sum >= 2 ? 1 : 0;
//         result = (sum % 2) + result;
//     }
//     return result;
// }
