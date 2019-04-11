/**
 * 选择排序
 * @param {*} arr 
 */

function selection_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = getPostion(arr, i); // 获取最小值的下标
        swap(arr, i, minIndex) // 和有序值交换下标
    }
    return arr;
}

function getPostion(arr, head) {
    let minIndex = head;
    for (let i = ++head; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i
        }
    }
    return minIndex;
}

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

let newArr = selection_sort([5,4,4,6,2,1,3,7]);
console.log(newArr)
