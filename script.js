
function singleNumber(nums) {
    const counter = {};
    nums.forEach(num => counter[num] = counter[num] ? counter[num] + 1 : 1);
    return +Object.keys(counter).filter(num => counter[num] === 1).join('');
}
//*//
// function singleNumber(nums) {
//     return nums.reduce((res, num) => res ^ num, 0);
// }
//*//
singleNumber([4,1,2,1,2]);

// Merge Sorted Array (bad solution)
function merge(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    while (p2 >= 0) {
        nums1[p--] = (nums1[p1] > nums2[p2]) ? nums1[p1--] : nums2[p2--];
    }
}
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

// Find the Index of the First Occurrence in a String
function strStr(haystack, needle) {
    if (!haystack.includes(needle)) return -1;
    return haystack.indexOf(needle);
}
//*//
// function strStr(haystack, needle) {
//     return haystack.indexOf(needle);
// }
//*//

strStr('sadbutsad', 'sad');

//Intersection of Two Arrays
function intersection(nums1, nums2) {
    const result = [];
    for (const num of nums2) {
        if (nums1.includes(num) && !result.includes(num)) {
            result.push(num);
        }
    }
    return result;
}
//*//
// const intersection = function(nums1, nums2) {
//     let result = [];
//     for (let i = 0; i < nums1.length; i++) {
//         if (nums2.includes(nums1[i]) && !result.includes(nums1[i])) {
//             result.push(nums1[i]);
//         }
//     }
//     return result;
// };
//*//

intersection([4,9,5], [9,4,9,8,4]);

//Contains Duplicate
function containsDuplicate(nums) {
    return nums.length !== new Set(nums).size;
}

containsDuplicate([1,2,3,4]);

//Uncommon Words from Two Sentences
function uncommonFromSentences(s1, s2) {
    const result = {};
    s1.split(' ').concat(s2.split(' ')).forEach(word => result[word] = result[word] ? result[word] +1 : 1);
    return Object.keys(result).filter(word => result[word] === 1);
}

uncommonFromSentences('this apple is sweet', 'this apple is sour');

//Move Zeroes
function moveZeroes(nums) {
    if (!nums.includes(0)) return nums;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.push(nums.splice(nums.indexOf(nums[i]), 1)[0]);
        }
    }
    return nums;
}
//*//
// function moveZeroes(nums) {
//     let count = 0;
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] !== 0) {
//             nums[count] = nums[i];
//             count++;
//         }
//     }
//     for(let i = count; i < nums.length; i++) {
//         nums[i] = 0;
//     }
//     return nums;
// }
//*//

moveZeroes([0]);

//Find the Difference
function findTheDifference(s, t) {
    const count = {};
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of t) {
        if (!count[char]) {
            return char;
        }
        count[char]--;
    }
    return '';
}

findTheDifference('abcd', 'abcde');

//Fizz Buzz
function fizzBuzz(n) {
    return Array(n).fill().map((_, i) => i+1).map(num => {
        if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
        if (num % 3 === 0) return 'Fizz';
        if (num % 5 === 0) return 'Buzz';
        return num.toString();
    });
}

fizzBuzz(15);

//Third Maximum Number
function thirdMax(nums) {
    const result = [...new Set(nums)].sort((a, b) => a - b);
    return result[result.length - 3] !== undefined ? result[result.length - 3] : result[result.length - 1];
}

thirdMax([3,3,4,3,4,3,0,3,3]);

//Number of Segments in a String
function countSegments(s) {
    return s.split(' ').filter(x => x !== '').length;
}

countSegments(', , , ,        a, eaefa');

//Find All Numbers Disappeared in an Array
function findDisappearedNumbers(nums) {
    return new Array(nums.length).fill().map((_, i) => i + 1).filter(num => !nums.includes(num));
}

findDisappearedNumbers([1,1]);

//To Lower Case
function toLowerCase(s) {
    return s.split('').map(x => x === x.toUpperCase() ? x.toLowerCase() : x).join('');
}
//*//
// function toLowerCase(s) {
//     return s.toLowerCase();
// }
//*//

toLowerCase('Hello');

//Capitalize the Title

function capitalizeTitle(title) {
    return title.split(' ').map(word => word.length <= 2 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.toLowerCase().slice(1)).join(' ');
}

capitalizeTitle('First leTTeR of EACH Word');

//Detect Capital
function detectCapitalUse(word) {
    const lowercaseOnly = /^[a-z]+$/g;
    const uppercaseOnly = /^[A-Z]+$/g;
    const capitalize = /^[A-Z][a-z]*$/;
    return lowercaseOnly.test(word) || uppercaseOnly.test(word) || capitalize.test(word);
}

detectCapitalUse('FlaG');

//Search Insert Position
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

searchInsert([1,3,5,6], 2);

//First Unique Character in a String
function firstUniqChar(s) {
    let result = {};
    s.split('').forEach(x => result[x] = result[x] ? result[x] + 1 : 1);
    return s.indexOf(Object.keys(result).find(x => result[x] === 1));
}

firstUniqChar('aabb');

//Roman to Integer
function romanToInt(s) {
    let result = 0
    let map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    for(let i = 0; i < s.length; i++){
        let first = s[i]
        let second = s[i+1]

        if(map[first] < map[second]){
            result -= map[first]
        } else {
            result += map[first]
        }
    }
    return result
}

romanToInt('MCMXCIV');

//Reverse Words in a String III
function reverseWords(s) {
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

reverseWords('God Ding');

//Binary Search
function search(nums, number) {
    let left = 0;
    let right = nums.length - 1;
    let middle;
    while (left <= right) {
        middle = Math.round((right - left) / 2) + left ;
        if (nums[middle] === number) {
            return middle;
        } else if (nums[middle] < number) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return  -1;
}

search([-1,0,3,5,9,12], 2);

//Majority Element
function majorityElement(nums) {
    const result = {};
    const len = nums.length / 2;
    nums.forEach(num => result[num] = result[num] ? result[num] + 1 : 1);
    return +Object.keys(result).filter(num => result[num] > len).join('');
}

majorityElement([2,2,1,1,1,2,2]);

//Sqrt(x)
function mySqrt(x) {
    if (x < 0) return -1;
    let sr = x / 2;
    let temp = 0;
    while (sr !== temp) {
        temp = sr;
        sr = (x / sr + sr) / 2
    }
    return Math.floor(sr);
}
//*//
// function mySqrt(x) {
//     let i=1;
//     while(i*i<=x){
//         i++;
//     }
//     return i-1
// }
//*//

mySqrt(8);
