/**
 * 归并排序
 * @param {*} arr 
 */

function merge_sort(arr) {
    _merge_sort(arr, 0, arr.length - 1)
}

function _merge_sort(arr, head, tail) {
    if (head >= tail) return;  // 元素少于等于一个时终止递归
    var mid = Math.floor((tail + head) / 2);  // 取中间点下标
    _merge_sort(arr, head, mid);
    _merge_sort(arr, mid + 1, tail);
    merge(arr, head, mid, tail);  // 按顺序合并元素
}

function merge(arr, head, mid, tail) {
    // 取两个指针分别指向两个数组的首位
    var i = head;
    var j = mid + 1;
    var x = 0; 
    var tmp = []; // 临时数组

    while(i <= mid && j <= tail) { // 把元素按顺序压入临时数组
        tmp[x++] = arr[i] < arr[j] ? arr[i++] : arr[j++];
    }

    // 剩余元素的头尾指针
    var start = i, end = mid;
    if (i > mid) {
        start = j, end = tail;
    }
    while (start <= end) {
        tmp[x++] = arr[start++];
    }

    // 用临时数组的有序元素替换掉排序数组的无序元素
    for (let index = head; index <= tail; index++) {
        arr[index] = tmp[index - head];
    }
}

var arr = [7,1,5,4,3,2,6,4,3,2,6,4,3,2,6,4,3,2,6,4,3,2,6,4,3,2,6]
merge_sort(arr);
console.log(arr);
