/**
 * 快速排序
 * @param {*} arr 
 */

function quick_sort(arr) {
    _quick_sort(arr, 0, arr.length-1)
}

function _quick_sort(arr, head, tail) {
    if (head >= tail) return; // 递归终止条件
    var pivot = partition(arr, head, tail); // 分区函数，获取基准点的下标，基准点左侧元素小于基准点，右侧大于它
    _quick_sort(arr, head, pivot-1);
    _quick_sort(arr, pivot+1, tail);    
}

// function partition(arr, head, tail) {
//     var pivot = tail; // 取基准点的下标,可以随机取
//     var arrLeft = []; // 容纳比基准点值小的元素
//     var arrRight = []; // 容纳比基准点值大的元素
//     var tmp = []; // arrLeft,arr[pivot],arrRight合并成的数组

//     for (let i = head; i < tail; i++) { // 'i < tail' 因为基准点取得最后一位，所以可以在遍历时排除它
//         if (arr[i] > arr[pivot]) {
//             arrRight.push(arr[i])
//         } else {
//             arrLeft.push(arr[i])
//         }
//     }

//     tmp = arrLeft.concat(arr[pivot], arrRight);
//     pivot = arrLeft.length + head; // 求得基准点新下标
    
//     for (let i = head; i <= tail; i++) {
//         arr[i] = tmp[i - head];
//     }
    
//     return pivot;
// }

function partition(arr, head, tail) { // 使用类似选择排序的方式，交换出比基准值小的区间，比较之前空间复杂度更低
    var pivot = arr[tail];
    var i = head;
    for (let j = head; j < tail; j++) {
        if (arr[j] < pivot) {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, i, tail);
    return i;
}

function swap(arr, i, j) {
    var tmp = arr[j];
    arr[j] = arr[i];
    arr[i] = tmp;
}

var arr = [10,5,6,4,3,5,6,4,3,5,6,4,3,5,6,4,3,5,0,9,8,7,7,8,8,7];
quick_sort(arr);
console.log(arr);
