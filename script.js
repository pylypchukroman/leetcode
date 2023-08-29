
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

//Add Strings
function addStrings(num1, num2) {
    return (BigInt(num1) + BigInt(num2)).toString();
}

addStrings('9333852702227987', '85731737104263');

//Excel Sheet Column Title
function convertToTitle(columnNumber) {
    let result = '';
    while (columnNumber > 0){
        let code = (--columnNumber) % 26;
        result = String.fromCharCode(code + 65) + result;
        columnNumber = (columnNumber - code) / 26
    }

    return result;
}

convertToTitle(28);

//Excel Sheet Column Number
function titleToNumber(columnTitle) {
    let result = 0;
    let index = 1;
    for(let i = columnTitle.length - 1; i >= 0; i--) {
        result += index * (columnTitle[i].charCodeAt() - 64);
        index *= 26;
    }
    return result;
}

titleToNumber('ZY');

//Monotonic Array
function isMonotonic(nums) {
    return nums.every((num, i) => i === 0 || num >= nums[i - 1]) || nums.every((num, i) => i === 0 || num <= nums[i - 1]);
}

isMonotonic([1,3,2]);

//Longest Common Prefix
function longestCommonPrefix(strs) {
    let result = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(result)) {
            const arr = result.split('');
            arr.pop();
            result = arr.join('');
        }
    }
    return result;
}

longestCommonPrefix(["flower","flow","flight"]);

//Reverse String
function reverseString(s) {
    for (let i = 0, j = s.length - 1; i < j;) {
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
    return s;
}

reverseString(["h","e","l","l","o"]);

//Missing Number

function missingNumber(nums) {
    let i = 0;
    while (nums.indexOf(i) !== -1) {
        i++;
    }
    return i;
}

missingNumber([9,6,4,2,3,5,7,0,1]);

//Keyboard Row
function findWords(words) {
    const firsRow = 'qwertyuiop';
    const secondRow = 'asdfghjkl';
    const thirdRow = 'zxcvbnm';
    const result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].split('').every(x => secondRow.includes(x.toLowerCase()))
            || words[i].split('').every(x => firsRow.includes(x.toLowerCase()))
            || words[i].split('').every(x => thirdRow.includes(x.toLowerCase()))) {
          result.push(words[i]);
        }
    }
    return result;
}

findWords(["adsdf","sfd"]);

//Relative Ranks {
function findRelativeRanks(score) {
    const newArr = [...score].sort((a,b)=>b-a);
    return score.map(num => {
        if (newArr.indexOf(num) === 0) {
            return 'Gold Medal'
        }
        if (newArr.indexOf(num) === 1) {
            return 'Silver Medal'
        }
        if (newArr.indexOf(num) === 2) {
            return 'Bronze Medal'
        }
        return (newArr.indexOf(num) + 1).toString();
    })
}

findRelativeRanks([10,3,8,9,4]);

//Maximum Product of Three Numbers
function maximumProduct(nums) {
    nums.sort((a, b) => b - a);
    return Math.max(nums[0] * nums[1] * nums[2], nums.at(-1) * nums.at(-2) * nums[0]);
}

maximumProduct([-1,-2,-3]);

//Find Smallest Letter Greater Than Target
function nextGreatestLetter(letters, target) {
    if (letters.length === 1) {
        return letters[0];
    }

    let left = 0;
    let right = letters.length;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (letters[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if (left === letters.length) {
        return letters[0];
    } else {
        return letters[left];
    }
}

nextGreatestLetter(["c","f","j"], 'a');

//Duplicate Zeros
function duplicateZeros(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            result.push(0);
        }
        result.push(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = result[i];
    }
    return arr;
}

duplicateZeros([1,0,2,3,0,4,5,0]);

//Find Common Characters
function commonChars(words) {
    const result = [];
    const firstWord = words[0];
    for (const letter of firstWord) {
        if (words.every(word => word.includes(letter))) {
            result.push(letter);
            words = words.map(word => word.replace(letter, ''));
        }
    }
    return result;
}

commonChars(["cool","lock","cook"]);

//Split Strings by Separator
function splitWordsBySeparator(words, separator) {
    return words.join(separator).split(separator).filter(word => word !== '');
}

splitWordsBySeparator(["$easy$","$problem$"], '$');

//Sum Multiples
function sumOfMultiples(n) {
    let x = 1;
    const result = []
    while (x <= n) {
        if (x % 3 === 0 || x % 5 === 0 || x % 7 === 0) {
            result.push(x)
        }
        x++;
    }
    return result.length >= 1 ? result.reduce((acc, num) => acc += num) : [];
}

//*//
// function sumOfMultiples(n) {
//     let sum = 0;
//     for(let i = 1; i < n+1; i++){
//         if(i % 3 === 0 )sum += i;
//         else if(i % 5 === 0 )sum += i;
//         else if(i % 7 === 0 )sum += i;
//     }
//     return sum;
// }

sumOfMultiples(1);

//Form Smallest Number From Two Digit Arrays
function minNumber(nums1, nums2) {
    const x = [];
    for (let i = 0; i < nums1.length; i ++) {
        if (nums2.includes(nums1[i])) {
            x.push(nums1[i]);
        }
    }
    const result = x.length > 0 ? Math.min(...x) : +(Math.min(...nums1).toString() + Math.min(...nums2).toString());
    const reverseResult = Number(result.toString().split('').reverse().join(''));
    return result < reverseResult ? result : reverseResult;
}

minNumber([7,5,6], [1,4]);

//Separate the Digits in an Array
function separateDigits(nums) {
    return nums.join('').split('').map(num => +num);
}

separateDigits([13,25,83,77]);

//Minimum Common Value
function getCommon(nums1, nums2) {
    const set = new Set(nums1);
    const result = nums2.filter(num => set.has(num))[0];
    return result !== undefined ? result : -1;
}
//*//
// function getCommon(nums1, nums2) {
//     const result = [];
//     for (let i = 0; i < nums1.length; i++) {
//         if (nums2.includes(nums1[i])) {
//             result.push(nums1[i]);
//         }
//     }
//     return Math.min(...result);
// }
//*//

getCommon([1,2,3], [2,4,3])

//Find Numbers with Even Number of Digits
function findNumbers(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i].toString().length % 2 === 0) {
            result.push(nums[i]);
        }
    }
    return result.length;
}

findNumbers([555,901,482,1771]);

//Sort the People
function sortPeople(names, heights) {
    let result = [];
    for (let i = 0; i < names.length; i++){
        result.push([names[i],heights[i]]);
    }
    return result.sort((a, b) => b[1] - a[1]).map(a => a[0]);
}

sortPeople(["Mary","John","Emma"], [180,165,170]);

//Maximum Count of Positive Integer and Negative Integer
function maximumCount(nums) {
    const pos = [];
    const neg = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            pos.push(nums[i]);
        }
        if (nums[i] < 0) {
            neg.push(nums[i]);
        }
    }
    return Math.max(pos.length, neg.length);
}

maximumCount([5,20,66,1314]);

//Difference Between Element Sum and Digit Sum of an Array
function differenceOfSum(nums) {
    const sum = nums.reduce((acc, num) => acc += num);
    const digit = nums.join('').split('').map(num => +num).reduce((acc, num) => acc+= num);
    return sum - digit;
}

differenceOfSum([1,15,6,3]);

//Chunk Array
function chunk(arr, size) {
    const chunked = [];
    for (let i = 0; i < arr.length; i += size) {
        chunked.push(arr.slice(i, i + size));
    }
    return chunked;
}

chunk([1,2,3,4,5], 1);

//Maximum Value of a String in an Array
function maximumValue(strs) {
    const result = strs.map(str => {
        if (!isNaN(Number(str))) {
            return +str;
        } else {
            return str.length;
        }
    })
    return Math.max(...result);
}

maximumValue(["alic3","bob","3","4","00000"]);

//Remove Trailing Zeros From a String
function removeTrailingZeros(num) {
    return num.replace(/0+$/, "");
}

removeTrailingZeros("51230100");

//Generate a String With Characters That Have Odd Counts
function generateTheString(n) {
    return n % 2 !== 0 ? 'a'.repeat(n) : 'a'.repeat(n-1) + 'b';
}

generateTheString(10);

//Merge Intervals
function merge2(intervals) {
    const result = [];
    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];
        const [prevStart, prevEnd] = intervals[i - 1];
        if (prevEnd >= start) {
            result.push([prevStart,  end]);
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
}

merge2([[1,3],[2,6],[8,10],[15,18]]);

//Concatenation of Array
function getConcatenation(nums) {
    return nums.concat(nums);
}

getConcatenation([1,3,2,1]);

//Build Array from Permutation
function buildArray(nums) {
    return nums.map(num => nums[num]);
}

buildArray([0,2,1,5,3,4]);

//Richest Customer Wealth
function maximumWealth(accounts) {
    return Math.max(...accounts.map(account => account.reduce((acc, num) => acc += num)));
}

maximumWealth([[1,5],[7,3],[3,5]]);

//Smallest Even Multiple
function smallestEvenMultiple(n) {
    let result = 1;
    while(result % 2 !== 0 || result % n !== 0) {
        result++;
    }
    return result;
}

smallestEvenMultiple(6);

//Running Sum of 1d Array
function runningSum(nums) {
    let rsum = 0;
    return nums.map(x => rsum += x);
}

runningSum([1,2,3,4]);

//Shuffle the Array
function shuffle(nums, n) {
    const result = [];
    const left = nums.slice(0, n);
    const right = nums.slice(n, nums.length);
    for (let i = 0; i < left.length; i++) {
        result.push(left[i], right[i]);
    }
    return result;
}

shuffle([2,5,1,3,4,7], 3);

//Kids With the Greatest Number of Candies
function kidsWithCandies(candies, extraCandies) {
    return candies.map(candie => candie + extraCandies >= Math.max(...candies));
}

kidsWithCandies([2,3,5,1,3], 3);

//Left and Right Sum Differences
function leftRightDifference(nums) {
    const result = [];
    let sum = 0;
    const leftSum = nums.map(num => (sum += num) - num);
    const rightSum = nums.map(num => (sum -= num));
    for (let i = 0; i < leftSum.length; i++) {
        result.push(Math.abs(leftSum[i] - rightSum[i]));
    }
    return result;
}

leftRightDifference([10,4,8,3]);

//XOR Operation in an Array
function xorOperation(n, start) {
    return new Array(n).fill(start).map((num, i) => start + 2 * i).reduce((acc, num) => acc ^= num);
}

xorOperation(5, 0);

//Count Items Matching a Rule
function countMatches(items, ruleKey, ruleValue) {
    const map = {
        'type': 0,
        'color': 1,
        'name': 2
    };
    return items.filter(item => item[map[ruleKey]] === ruleValue).length;
}

countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver");

//Sorting the Sentence
function sortSentence(s) {
    const arr = s.split(' ');
    const sortedArr = arr.sort((a, b) => a[a.length - 1] - b[b.length - 1]);
    return sortedArr.map(word => word.slice(0, -1)).join(' ');
}

sortSentence('is2 sentence4 This1 a3');

//Maximum 69 Number
function maximum69Number(num) {
 return Number(num.toString().replace("6", "9"));
}

maximum69Number(9669);

//Count Asterisks
function countAsterisks(s) {
    const n = s.split('|').filter((word, i) => i % 2 === 0).join('');
    return n.length - n.replaceAll('*', '').length;
}

countAsterisks("yo|uar|e**|b|e***au|tifu|l");

//Reverse Prefix of Word
function reversePrefix(word, ch) {
    const index = Math.min(word.indexOf(ch))
    const prefix = word.slice(0, index + 1).split('').reverse().join('');
    const rest = word.slice(index + 1);
    return prefix + rest;
}

reversePrefix('abcdefd', 'd');

//Find Lucky Integer in an Array
function findLucky(arr) {
    const obj = {};
    arr.forEach(num => obj[num] = obj[num] ? obj[num] + 1 : 1);
    const result = Object.entries(obj).filter(num => Number(num[0]) === num[1]).map(num => num[1]);
    return result.length < 1 ? -1 : Math.max(...result);
}

findLucky([2,2,2,3,3]);

//String Matching in an Array
function stringMatching(words) {
    return words.filter(word => words.some(w => w.includes(word) && w.length !== word.length));
}

stringMatching(["mass","as","hero","superhero"]);

//Number of Common Factors
function commonFactors(a, b) {
    let count = 0;
    let n = 0;
    while (n <= Math.min(a, b)) {
        if (a % n === 0 && b % n === 0 ) {
            count ++;
        }
        n++;
    }
    return count;
}

commonFactors(25, 30);

//Find the Difference of Two Arrays
function findDifference(nums1, nums2) {
    const first = [];
    const second = [];
    for (let i = 0; i < nums1.length; i++) {
        if (!nums2.includes(nums1[i])) {
            first.push(nums1[i]);
        }
    }
    for (let j = 0; j < nums2.length; j++) {
        if (!nums1.includes(nums2[j])) {
            second.push(nums2[j]);
        }
    }
    return [[...new Set(first)], [...new Set(second)]];
}

findDifference([1,2,3], [2,4,6]);

//Sum of Unique Elements
function sumOfUnique(nums) {
    const obj = {};
    nums.forEach(num => obj[num] = obj[num] ? obj[num] + 1 : 1);
    const result = Object.keys(obj).filter(num => obj[num] === 1).map(num => +num);
    return result.length > 0 ? result.reduce((acc, num) => acc += num) : 0;
}

sumOfUnique([1,2,3,2]);

//Find Target Indices After Sorting Array
function targetIndices(nums, target) {
    const sortedArr = nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] === target) {
            result.push(i);
        }
    }
    return result;
}

targetIndices([1,2,5,2,3], 2);

//Sort Array By Parity
function sortArrayByParity(nums) {
    const odd = [];
    const even = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            odd.push(nums[i]);
        } else {
            even.push(nums[i]);
        }
    }
    return odd.concat(even);
}

sortArrayByParity([3,1,2,4]);

//Percentage of Letter in String
function percentageLetter(s, letter) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === letter) {
            count++
        }
    }
    return Math.floor((count / s.length) * 100);
}

percentageLetter("foobar", 'o');

//Unique Number of Occurrences
function uniqueOccurrences(arr) {
    const result = {};
    arr.forEach(num => result[num] = result[num] ? result[num] + 1 : 1);
    return Object.values(result).length === new Set(Object.values(result)).size;
}

uniqueOccurrences([1,2]);

//First Letter to Appear Twice
function repeatedCharacter(s) {
    const set = new Set();
    for (let i = 0; i < s.length; i += 1) {
        if(set.has(s[i])) {
            return s[i]
        }
        set.add(s[i]);
    }
}

repeatedCharacter('abccbaacz');

//Count Common Words With One Occurrence
function countWords(words1, words2) {
    const first = {};
    const second = {};
    const resultObj = {};
    words1.forEach(word => first[word] = first[word] ? first[word] + 1 : 1);
    words2.forEach(word => second[word] = second[word] ? second[word] + 1 : 1);
    const uniqFirst = Object.keys(first).filter(word => first[word] === 1);
    const uniqSecond = Object.keys(second).filter(word => second[word] === 1);
    uniqFirst.concat(uniqSecond).forEach(word => resultObj[word] = resultObj[word] ? resultObj[word] + 1 : 1);
    const result = Object.keys(resultObj).filter(word => resultObj[word] === 2)
    return result.length;
}

countWords(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"]);

//Minimum String Length After Removing Substrings
function minLength(s) {
    while (s.includes('AB') || s.includes('CD')) {
        if(s.includes("AB"))
            s = s.replace("AB","")

        if(s.includes("CD"))
            s = s.replace("CD", '')
    }
    return s.length;
}

minLength('ABFCACDB');

//Smallest Range I
function smallestRangeI(nums, k) {
    const diff = Math.max(...nums) - Math.min(...nums) - (2 * k);
    return diff < 0 ? 0 : diff;
}

smallestRangeI([1,3,6], 3);

//Intersection of Multiple Arrays
function intersection(nums) {
    const result = [];
    const target = nums[0];
    for (let i = 0; i < target.length; i++) {
        if (nums.every(num => num.includes(target[i]))) {
            result.push(target[i]);
        }
    }
    return result;
}

intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]);

//Largest Positive Integer That Exists With Its Negative
function findMaxK(nums) {
    const negative = nums.filter(num => num < 0);
    const positive = nums.filter(num => num > 0);
    const result = negative.filter(num => positive.includes(Math.abs(num)));
    return result.length > 0 ? Math.max(...result.map(x => Math.abs(x))) : -1;
}

findMaxK([-10,8,6,7,-2,-3]);

//Find the Distance Value Between Two Arrays
function findTheDistanceValue(arr1, arr2, d) {
    let result = 0;
    for (let i = 0; i < arr1.length; i++) {
        let count = 0;
        for (let j = 0; j < arr2.length; j++) {
            if (Math.abs(arr1[i] - arr2[j]) <= d) count ++;
        }
        if (count === 0) result ++;
    }

    return result;
}

findTheDistanceValue([4,5,8], [10,9,1,8], 2);

//Calculate Money in Leetcode Bank
function totalMoney(n) {
    if (n <= 7) {
        return (n * (n + 1)) / 2;
    } else {
        let total = 0;
        const week = Math.floor(n / 7);
        const rest = n % 7;
        for (let i = 0; i < week; i++) {
            total = total + 28 + i * 7;
        }
        for (let i = week + 1; i < week + 1 + rest; i++) {
            total += i;
        }
        return total;
    }
}

totalMoney(26);

//Add Digits
function addDigits(num) {
    if (num === 0) return 0;
    return num % 9 === 0 ? 9 : num % 9;
}

addDigits(30);

//Count Integers With Even Digit Sum
function countEven(num) {
    const arr = new Array(num).fill(0).map((num, i) => i + 1)
    const filtered = arr.filter(num => num.toString().split('').map(num => +num).reduce((acc, num) => acc += num) % 2 === 0);
    return filtered.length;
}

countEven(30);

//Sign of the Product of an Array
function arraySign(nums) {
    let val = nums.reduce((acc,curr)=> {
        acc *= curr;
        return acc;
        }
    )
    if (val > 0) return 1;
    else if (val < 0) return -1;
    else return 0;
}

arraySign([1,28,-91,-62,-36,-1,-84,-90,-92,61,6,-58,-60,2,51,-15,-18,-81,87,84,100,-84,-13,-87,-33,72,-72,-59,-79,28,-69,-97,-93,17,67,11,-12,19,5,42,-85,71,-77,-82,26,-58,-51,-14,63,-85,-86,66,47,57,-86,-25,-75,59,-17,-71,89,-78,-42,30,39,61,-96,-30,-29,-92,-90,69,20,65,32,92,44,-71,-18,87,-86,23,-96,-21,-49,-96,-98,35,-11,-1,81,-48,68,5,75,57,-30,-7,32,86,-29,-86,-61,45,-31,-93,-26,-9,86,57,-52,75,68,-58,14,27,-94,47,-38,-44,75,-83,21,-83,43,62,74,97,78,43,54,28,64,-19,-89,88,68,18,-96,-83,-25,-71,88,-84,-24,-61,72,-90,-56,29,46,56,51,16,66,-2,65,-95,16,51,42,61,99,89,-93,59,-99,69,26,-61,21,41,40,-4,-49,3,-96,57,65,72,-41,-77,-4,61,71,-88,21,-95,38,64,92,0,-63]
);

//Divide a String Into Groups of Size k
function divideString(s, k, fill) {
    const result = [];
    for (let i = 0; i < s.length; i += k) {
        result.push(s.substring(i, i + k));
    }
    for (let i = 0; i < result.length; i++) {
        if(result[i].length !== k) {
            result[i] += fill.repeat(k - result[i].length);
        }
    }
    return result;
}

divideString('abcdefgh', 3, 'x');

//Average Salary Excluding the Minimum and Maximum Salary
function average(salary) {
    const result = [];
    const max = Math.max(...salary);
    const min = Math.min(...salary);
    for (let i = 0; i < salary.length; i++) {
        if (salary[i] === max || salary[i] === min) {
            continue;
        }
        result.push(salary[i]);
    }
    return result.reduce((acc, num) => acc += num) / result.length;
}

average([4000,3000,1000,2000]);

//Occurrences After Bigram
function findOcurrences(text, first, second) {
    const arr = text.split(' ');
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === first && arr[i + 1] === second) {
            result.push(arr[i + 2])
        }
    }
    return result.filter(r => r !== undefined);
}

findOcurrences("ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv lnlqhmaohv lnlqhmaohv ypkk ypkk ypkk lnlqhmaohv lnlqhmaohv ypkk", 'lnlqhmaohv', 'ypkk');

//Valid Anagram
function average1(s, t) {
    return s.toLowerCase().split('').sort().join('') === t.toLowerCase().split('').sort().join('');
}

average1('anagram', 'nagaram');

//Circular Sentence
function isCircularSentence(sentence) {
    const arr = sentence.split(' ');
    if (arr.length === 1) {
        const target = arr[0];
        return target[0] === target[target.length - 1];
    } else {
        for (let i = 1; i < arr.length; i++)
        if (arr[i][0] !== arr[i - 1][arr[i - 1].length - 1]) return false;
        return arr[0][0] === arr[arr.length - 1][arr[arr.length - 1].length - 1];
    }
}

isCircularSentence('leetcode exercises sound delightful');

//Reformat Date
function reformatDate(date) {
    const map = {
        'Jan': '01',
        'Feb': '02',
        'Mar': '03',
        'Apr': '04',
        'May': '05',
        'Jun': '06',
        'Jul': '07',
        'Aug': '08',
        'Sep': '09',
        'Oct': '10',
        'Nov': '11',
        'Dec': '12'
    };
    const arr = date.split(' ').reverse();
    function extractDate(x) {
        const numberPattern = /\d+/;
        const match = x.match(numberPattern)[0];
        if (match.length === 1) {
            return '0' + match;
        } else {
            return match;
        }
    }
    return arr.map((x, i) => {
        if (i === 1) {
            return map[x];
        } else if (i === 2) {
            return extractDate(x);
        }
        return x;
    }).join('-');
}

reformatDate('26th May 1960');

//Three Consecutive Odds
function threeConsecutiveOdds(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0  ) {
            return true;
        }
    }
    return false;
}

threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]);

//Maximum Ascending Subarray Sum
function maxAscendingSum(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(nums[i - 1] < nums[i]) {
            currentSum += nums[i];
            maxSum = Math.max(maxSum, currentSum)
        } else {
            currentSum = nums[i];
        }
    }

    return maxSum;
}

maxAscendingSum([10,20,30,5,10,50]);

//K Items With the Maximum Sum
function kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k) {
    return Math.min(k, numOnes) - Math.max(0, k - numOnes - numZeros);
}

kItemsWithMaximumSum(2, 4, 4, 0);

//Sum of Digits of String After Convert
function getLucky(s, k) {
    let n = 0;
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const number = s.split('').map(x => letters.indexOf(x) + 1).join('');
    let temp = number;
    while (n < k) {
        temp = temp.split('').map(x => +x).reduce((acc, num) => acc += num).toString();
        n++
    }
    return +temp;
}

getLucky('iiii', 1);

//Largest 3-Same-Digit Number in String
function largestGoodInteger(num) {
    let newArr = [];
    const nums = num.split('');
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) {
            newArr.push(nums[i]);
        }
    }
    newArr = newArr.map((item) => parseInt(item)).sort((a, b) => b - a);
    return Array(3).fill(newArr[0]).join('');
}

largestGoodInteger('6777133339');

//Rank Transform of an Array
function arrayRankTransform(arr) {
    const uniq = [...new Set(arr.slice().sort((a, b) => a - b))];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = uniq.indexOf(arr[i]) + 1;
    }
    return arr;
}

arrayRankTransform([40,10,20,30]);


//Flatting
// function flat(arr) {
//     const string = JSON.stringify(arr);
//     const regExp = /[0-9/]/g;
//     const numbers = string.match(regExp);
//     return numbers.map(number => +number);
// }

function flat(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...flat(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

flat([4, [5], [[6]], [[[7]]]]);

//Count Elements With Strictly Smaller and Greater Elements
function countElements(nums) {
    const temp = nums.sort((a, b) => a - b);
    const min = temp[0];
    const max = temp[temp.length - 1];
    const result = [];
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] !== max && temp[i] !== min) {
            result.push(temp[i]);
        }
    }
    return result.length;
}

countElements([11,7,2,15]);

//Average Value of Even Numbers That Are Divisible by Three
function averageValue(nums) {
    let result = 0;
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0 && nums[i] % 3 === 0) {
            result += nums[i];
            count++;
        }
    }
    return result === 0 ? 0 : Math.floor(result / count);
}

averageValue([9,3,8,4,2,5,3,8,6,1]);

//Element Appearing More Than 25% In Sorted Array
function findSpecialInteger(arr) {
    const temp = {};
    arr.forEach(num => temp[num] = temp[num] ? temp[num] + 1 : 1);
    const result = Object.keys(temp).filter(num => temp[num] > arr.length / 4);
    return Number(result.join(''))
}

findSpecialInteger([1,2,3,3]);

//Ransom Note
function canConstruct(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false;
    for (let i = 0; i < ransomNote.length; i++) {
        let char = ransomNote[i];
        if (!magazine.includes(char)) return false;
        magazine = magazine.replace(char, '');
    }
    return true;
}

canConstruct('aa', 'ab');

//Three Divisors
function isThree(n) {
    let x = 0;
    let result = 0;
    while (x <= n) {
        if (n % x === 0) {
            result +=1;
        }
        x++;
    }
    return result === 3;
}

isThree(2);

//Largest Odd Number in String
function largestOddNumber (num) {
    for (let i = num.length-1; i >=0 ; i--) {
        if (num[i] % 2 !== 0) {
            return num.slice(0, i + 1);
        }
    }
    return "";
}

largestOddNumber('4207');

//Max Consecutive Ones
function findMaxConsecutiveOnes (nums) {
    const arr = nums.join('').split('0');
    return Math.max(...arr.map(num => num.length));
}

// const findMaxConsecutiveOnes = function(nums) {
//     let maxCount = 0;
//     let count = 0;
//     for (let i = 0; i<nums.length; i++){
//         if (nums[i] === 1){
//             count++;
//             maxCount = Math.max(maxCount,count);
//         } else {
//             count = 0;
//         }
//     }
//     return maxCount;
// };

findMaxConsecutiveOnes([1,0,1,1,0,1]);

//Intersection of Two Arrays II
function intersect (nums1, nums2) {
    const result = [];
    for (let i = 0; i < nums2.length; i++) {
        if (nums1.includes(nums2[i])) {
            result.push(nums2[i]);
            nums1.splice(nums1.indexOf(nums2[i]), 1);
        }
    }
    return result;
}

intersect([4,9,5], [9,4,9,8,4]);

//Rotate String
function rotateString (s, goal) {
    let result  = false;
    for (let i = 0; i < s.length; i++) {
        const firs = s[0];
        s = s.slice(1) + firs;
        if (s === goal) {
            result = true;
        }
    }
    return result;
}

rotateString('abcde', 'cdeab');

//Squares of a Sorted Array
function sortedSquares (nums) {
    return nums.map(num => Math.pow(num, 2)).sort((a, b) => a - b);
}

sortedSquares([-7,-3,2,3,11]);

//Remove Element
function removeElement (nums, val) {
    const arr = nums.filter(num => num !== val);
    nums.length = 0;
    nums.push(...arr);
    return nums.length;
}

removeElement([3,2,2,3], 3);

//Check If N and Its Double Exist
function checkIfExist (arr) {
    for (let i= 0; i < arr.length; i++) {
        for (let j= 0; j<arr.length; j++) {
            if (i !== j && arr[i] === 2 * arr[j]) {
                return true;
            }
        }
    }
    return false;
}

checkIfExist([-10,12,-20,-8,15]);

//Subtract the Product and Sum of Digits of an Integer
function subtractProductAndSum (n) {
    const sum = n.toString().split('').map(num => +num).reduce((acc, num) => acc += num);
    const prod = n.toString().split('').map(num => +num).reduce((acc, num) => acc *= num);
    return prod - sum;
}

subtractProductAndSum(234);

//Number of Steps to Reduce a Number to Zero
function numberOfSteps (num) {
    let steps = 0;
    while (num > 0) {
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = num - 1;
        }
        steps += 1;
    }
    return steps;
}

numberOfSteps(8);

//Check If Two String Arrays are Equivalent
function arrayStringsAreEqual (word1, word2) {
    const firsWord = word1.reduce((acc, word) => acc += word);
    const secondWord = word2.reduce((acc, word) => acc += word);
    return firsWord === secondWord;

    // word1.join('') === word2.join('');
}

arrayStringsAreEqual(["ab", "c"], ["a", "bc"]);

//Truncate Sentence
function truncateSentence (s, k) {
    return s.trim().split(' ').splice(0, k).join(' ');
}

truncateSentence('Hello how are you Contestant', 4);

//Faulty Keyboard
function finalString (s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'i') {
            result = result.split('').reverse().join('');
        } else {
            result += s[i];
        }
    }
    return result;
}

finalString('string');

//Unique Morse Code Words
function uniqueMorseRepresentations (words) {
    morseCodeMap = {
        'a': '.-',
        'b': '-...',
        'c': '-.-.',
        'd': '-..',
        'e': '.',
        'f': '..-.',
        'g': '--.',
        'h': '....',
        'i': '..',
        'j': '.---',
        'k': '-.-',
        'l': '.-..',
        'm': '--',
        'n': '-.',
        'o': '---',
        'p': '.--.',
        'q': '--.-',
        'r': '.-.',
        's': '...',
        't': '-',
        'u': '..-',
        'v': '...-',
        'w': '.--',
        'x': '-..-',
        'y': '-.--',
        'z': '--..',
    }
    const morseWords = words.map(word => word.split('').map(let => morseCodeMap[let]).join(''));
    return [...new Set(morseWords)].length;
}

uniqueMorseRepresentations(["a"]);

//Maximum Sum With Exactly K Elements
function maximizeSum (nums, k) {
    nums.sort((a, b) => b - a);
    let x = 0;
    let sum = 0;
    while (x < k) {
        sum += nums[0];
        nums[0] = nums[0] + 1;
        x++;
    }
    return sum;
}

maximizeSum([5,5,5], 2);

//Find the Highest Altitude
function largestAltitude (gain) {
    const result = [0];
    let att = 0;
    for (let i = 0; i < gain.length; i++) {
        att += gain[i];
        result.push(att);
    }
    return Math.max(...result);
}

largestAltitude([-5,1,5,0,-7]);

//Minimum Number of Moves to Seat Everyone
function minMovesToSeat (seats, students) {
    let sum = 0;
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    for (let i = 0; i < seats.length; i++) {
        sum += Math.abs(seats[i] - students[i]);
    }

    return sum;
}

minMovesToSeat([4,1,5,9], [1,3,2,6]);

//Find Greatest Common Divisor of Array
function findGCD (nums) {
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    let x = 0;
    const result = [];
    while (x <= max) {
        if (max % x === 0 && min % x === 0) {
            result.push(x);
        }
        x++;
    }
    return Math.max(...result);
}

findGCD([3,3]);

//Sum of Digits in Base K
function sumBase (n, k) {
    let result = 0;
    const expressed = n.toString(k);
    for (let i = 0; i < expressed.length; i++) {
        result += Number(expressed[i]);
    }
    return result;
}

sumBase(34, 6);

//Number of Senior Citizens
function countSeniors (details) {
    const filtered = details.filter(detail => Number(detail.slice(11, 13)) > 60);
    return filtered.length;
}

countSeniors(["7868190130M7522","5303914400F9211","9273338290F4010"]);

//Check if All Characters Have Equal Number of Occurrences
function areOccurrencesEqual (s) {
    const result = {};
    s.split('').forEach(l => result[l] = result[l] ? result[l] + 1 : 1);
    const uniq = [...new Set(Object.values(result))];
    return uniq.length === 1;
}

areOccurrencesEqual('abacbc');

//Find N Unique Integers Sum up to Zero
function sumZero (n) {
        if (n % 2 === 0) {
            const result = [];
            for (let i = 1; i <= n / 2; i++) {
                result.push(i, -i);
            }
            return result;
        } else {
            const result = [0];
            for (let i = 1; i <= Math.floor(n / 2); i++) {
                result.push(i, -i);
            }
            return  result;
        }
}

sumZero(6);

//Counting Bits
function countBits (n) {
    const result = [];
    for (let i = 0; i <= n; i++){
        result.push(i.toString(2).split("0").join("").length);
    }
    return result;
}

countBits(2);

//Number of Students Doing Homework at a Given Time
function busyStudent (startTime, endTime, queryTime) {
    const filtered = startTime.filter((_, i) => startTime[i] <= queryTime && endTime[i] >= queryTime);
    return filtered.length;
}

busyStudent([1,2,3], [3,2,7], 4);

//Robot Return to Origin
function judgeCircle (moves) {
    const result = [];
    const arr = moves.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'U') {
            result.push(1)
        } else if (arr[i] === 'D') {
            result.push(-1);
        } else if (arr[i] === 'L') {
            result.push(20);
        } else if (arr[i] === 'R') {
            result.push(-20);
        }
    }
    return result.reduce((acc, num) => acc += num) === 0;
}

judgeCircle('UD');

// Count the Number of Vowel Strings in Range
function vowelStrings (words, left, right) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const filtered = words.slice(left, right + 1).filter(word => vowels.includes(word[0]) && vowels.includes(word[word.length - 1]));
    return filtered.length;
}

vowelStrings(["hey","aeo","mu","ooo","artro"], 1, 4);

//Baseball Game
function calPoints (operations) {
    const result = [];
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === 'D') {
            result.push(result[result.length - 1] * 2);
        } else if (operations[i] === 'C') {
            result.pop();
        } else if (operations[i] === '+') {
            result.push(result[result.length - 1] + result[result.length - 2]);
        } else {
            result.push(Number(operations[i]));
        }
    }
    return result.reduce((acc, num) => acc += num);
}

calPoints(["5","2","C","D","+"]);

//Count Operations to Obtain Zero
function countOperations (num1, num2) {
    let counter = 0;
    while (num1 && num2 !== 0) {
        if (num1 < num2) {
            num2 = num2 - num1;
        } else {
            num1 = num1 - num2;
        }
        counter++;
    }
    return counter;
}

countOperations(2, 3);

//Minimize String Length
function minimizedStringLength (s) {
    return [...new Set(s.split(''))].length;
}

minimizedStringLength('dddaaa');

//Delete Columns to Make Sorted
function minDeletionSize (strs) {
    const moved = strs[0].split('').map((col, i) => strs.map((row) => row[i]));
    const sorted = moved.filter(x => x.join('') !== x.sort().join(''));
    return sorted.length;
}

minDeletionSize(["cba","daf","ghi"]);

//Two Out of Three
function twoOutOfThree (nums1, nums2, nums3) {
    const result = {};
    const uniq1 = [...new Set(nums1)];
    const uniq2 = [...new Set(nums2)];
    const uniq3 = [...new Set(nums3)];
    const arr = uniq1.concat(uniq2).concat(uniq3);
    arr.forEach(num => result[num] = result[num] ? result[num] + 1 : 1);
    const filtered = Object.keys(result).filter(num => result[num] >= 2).map(x => +x);
    return filtered
}

twoOutOfThree([1,1,3,2], [2,3], [3]);

//Check if Word Equals Summation of Two Words
function isSumEqual (firstWord, secondWord, targetWord) {
    const first = Array.from(firstWord).reduce((a, c) => a += c.charCodeAt(0) - 97, '');
    const second = Array.from(secondWord).reduce((a, c) => a += c.charCodeAt(0) - 97, '');
    const target = Array.from(targetWord).reduce((a, c) => a += c.charCodeAt(0) - 97, '');
    return (+first + +second) === +target;
}

isSumEqual('j', 'j', 'bi');

//Count Prefixes of a Given String
function countPrefixes (words, s) {
    return words.filter(word => s.startsWith(word)).length;
}

countPrefixes(["a","b","c","ab","bc","abc"], 'abc');

//Maximum Number of Words You Can Type
function canBeTypedWords (text, brokenLetters) {
    const brokenArr = brokenLetters.split('');
    const textArr = text.split(' ');
    const result = textArr.filter(text => brokenArr.every(l => !text.includes(l))).length;
    return result;
}

canBeTypedWords('leet code', 'lt');

//Count Number of Pairs With Absolute Difference K
function countKDifference (nums, k) {
    nums.sort((a, b) => a - b);
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) {
                result++;
            }
        }
    }
    return result;
}

countKDifference([1,2,2,1], 1);

//Count of Matches in Tournament
function countKDifference1 (n) {
 return n - 1;
}

countKDifference1(7);

//N-Repeated Element in Size 2N Array
function repeatedNTimes (nums) {
    const n = nums.length / 2;
    const obj = {};
    nums.forEach(num => obj[num] = obj[num] ? obj[num] + 1 : 1);
    const filtered = Object.keys(obj).filter(x => obj[x] === n);
    return Number(filtered[0]);
}

repeatedNTimes([1,2,3,3]);

//Delete Characters to Make Fancy String
function makeFancyString (s) {
    const arr = s.split('');
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1] || arr[i] !== arr[i + 2]) {
            result.push(arr[i]);
        }
    }
    return result.join('');
}

makeFancyString('leeetcode');

//Minimum Distance to the Target Element
function getMinDistance (nums, target, start) {
    const array = [];
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === target){
            array.push(Math.abs(i - start));
        }
    }
    return Math.min(...array);
}

getMinDistance([1,1,1,1,1,1,1,1,1,1], 1, 0);

//Path Crossing
function isPathCrossing (path) {
    let visited = new Set();
    let start = [0, 0];
    visited.add(start.join(','));
    for (let i = 0; i < path.length; i++) {
        if (path[i] === 'N') {
            start[1] += 1;
        } else if (path[i] === 'E') {
            start[0] += 1;
        } else if (path[i] === 'S') {
            start[1] -= 1;
        } else if (path[i] === 'W') {
            start[0] -= 1;
        }
        let current = start.join(',');
        if (visited.has(current)) {
            return true;
        }
        visited.add(current);
    }
    return false;
}

isPathCrossing('NNSWWEWSSESSWENNW');

//Reverse Bits
function reverseBits (n) {
    const reversed = n.toString(2).split('').reverse().join('');
    const result =  reversed.padEnd(32,'0');
    return parseInt(result, 2);
}

reverseBits('00000010100101000001111010011100');

//Hamming Distance
function hammingDistance (x, y) {
    const xBit = x.toString(2).padStart(32, '0');
    const yBit = y.toString(2).padStart(32, '0');
    let count = 0;
    for (let i = 0; i < xBit.length; i++) {
        if (xBit[i] !== yBit[i]) {
            count++;
        }
    }
    return count;
}

hammingDistance(3, 1);

//Sort Integers by The Number of 1 Bits
function sortByBits (arr) {
    if (arr.join('') === arr.sort((a, b) => b - a).join('')) {
        return arr.sort((a, b) => a.toString(2).split('0').join('').length - b.toString(2).split('0').join('').length).reverse();
    } else {
        arr.sort((a, b) => a - b);
        return arr.sort((a, b) => a.toString(2).split('0').join('').length - b.toString(2).split('0').join('').length)
    }
}

sortByBits([0,1,2,3,4,5,6,7,8]);

//Replace All Digits with CharactersReplace All Digits with Characters
function replaceDigits (s) {
    const result = [];
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < s.length; i++) {
        if (letters.includes(s[i])) {
            result.push(s[i]);
        } else {
            result.push(letters[letters.indexOf(s[i - 1]) + Number(s[i])]);
        }
    }
    return result.join('');
}

replaceDigits('a1c1e1');

//Calculate Delayed Arrival Time
function findDelayedArrivalTime (arrivalTime, delayedTime) {
    const delayed = arrivalTime + delayedTime;
    if (delayed < 24) {
        return delayed;
    } else {
        const day = Math.floor(delayed / 24);
        return delayed - (day * 24);
    }
}

findDelayedArrivalTime(15, 5);

//Number of Strings That Appear as Substrings in Word
function numOfStrings (patterns, word) {
    return patterns.filter(x => word.includes(x)).length;
}

numOfStrings(["a","a","a"], 'ab');

//Decrypt String from Alphabet to Integer Mapping
function freqAlphabets (s) {
    const letters = '@abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for(let i = 0; i < s.length; i++) {
        if (s[i + 2] === '#') {
            result += letters[Number(s[i] + s[i + 1])];
            i = i + 2;
        } else {
            result += letters[Number(s[i])];
        }
    }
    return result;
}

freqAlphabets('10#11#12');

//Find First Palindromic String in the Array
function firstPalindrome (words) {
    const result = words.find(word => word === word.split('').reverse().join(''));
    return result === undefined ? '' : result;
}

firstPalindrome(["notapalindrome","racecar"]);

//Self Dividing Numbers
function selfDividingNumbers (left, right) {
    const result = [];
    for (let i = left; i <= right; i++) {
        if (i.toString().split('').every(x => i % x === 0)) {
            result.push(i);
        }
    }
    return result;
}

selfDividingNumbers(1, 22);

//A Number After a Double Reversal
function isSameAfterReversals (num) {
    const doubleReversed = num.toString().split('').reverse().join('').replace(/^0+/, '').split('').reverse().join('').replace(/^0+/, '');
    return num === +doubleReversed;
}

isSameAfterReversals(526);

//Determine if String Halves Are Alike
function halvesAreAlike (s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const left = s.slice(0, s.length / 2);
    const right = s.slice(s.length / 2);
    const leftVowels = left.split('').filter(x => vowels.includes(x));
    const rightVowels = right.split('').filter(x => vowels.includes(x));
    return leftVowels.length === rightVowels.length;
}

halvesAreAlike('textbook');

//Neither Minimum nor Maximum
function findNonMinOrMax (nums) {
    if (nums.length <= 2) {
        return -1;
    } else {
        nums.sort((a, b) => a - b);
        return nums[1];
    }
}

findNonMinOrMax([2,1,3]);

//Count Negative Numbers in a Sorted Matrix
function countNegatives (grid) {
    return grid.map(x => x.filter(y => y < 0).length).reduce((acc, num) => acc += num);
}

countNegatives([[3,2],[1,0]]);

//Counting Words With a Given Prefix
function prefixCount (words, pref) {
    return words.filter(word => word.startsWith(pref)).length;
}

prefixCount(["pay","attention","practice","attend"], 'at');

//Height Checker
function heightChecker (heights) {
    const arr = [...heights];
    const sorted = heights.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] !== arr[i]) {
            count++;
        }
    }
    return count;
}

heightChecker([1,1,4,2,1,3]);
