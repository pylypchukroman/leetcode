
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
