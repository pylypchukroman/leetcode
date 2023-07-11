
// function singleNumber(nums) {
//     const counter = {};
//     nums.forEach(num => counter[num] = counter[num] ? counter[num] + 1 : 1);
//     return +Object.keys(counter).filter(num => counter[num] === 1).join('');
// }

//*//
// function singleNumber(nums) {
//     return nums.reduce((res, num) => res ^ num, 0);
// }
//*//

// singleNumber([4,1,2,1,2]);

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
