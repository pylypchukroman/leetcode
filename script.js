
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
