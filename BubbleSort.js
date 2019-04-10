/**
 * 冒泡排序
 * @param {*} arr 
 */
function bubble_sort(arr) {
    for (var i = 0; i < arr.length - 1; i++) { // i 表示冒泡次数
        var flag = false; 

        for (var j = 0; j < arr.length - 1 - i; j++) { // j 表示元素交换次数，注意冒泡次数和交换册数的联系
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                flag = true;
            }
        }
        if (!flag) break; // 没有数据交换,说明数据已经全然有序
    }

    return arr;
}

var newArr = bubble_sort([5,4,6,2,1,3,7]);
console.log(newArr);

