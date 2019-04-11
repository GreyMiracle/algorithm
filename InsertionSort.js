/**
 * 插入排序
 * @param {*} arr 
 */
function insertion_sort(arr) {
    var i, j, temp; // i和j为划分有序区间与无序区间的变量，j为有序区间的最大值，i是无序区间的最小值
    for (i = 1; i < arr.length; i++) { // 遍历无序区间的元素
        temp = arr[i]; // 此次循环需要插入的操作数,空出移动位置
        for (j = i-1; j >= 0; j--) { // 倒序遍历有序区间
            if (temp < arr[j]) { // 操作数小于有序区间的元素时，该元素后移一位
                arr[j+1] = arr[j]
            } else {
                break; // 当前有序元素的函数小于等于操作数，说明当前值的后一位是操作数应该插入的位置，这也使算法稳定
            }
        }
        arr[j+1] = temp;
    }
    return arr;
}

var newArr = insertion_sort([5,4,6,2,1,3,7]);
console.log(newArr);
