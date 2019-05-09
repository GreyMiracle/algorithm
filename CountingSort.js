
function counting_star(arr) {
    // 获取最大值
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i]
        }
    }
    
    // 添加元数组
    let meta = [];
    for (let i = 0; i <= max; i++) {
        meta[i] = 0;
    }

    // 统计值的出现次数
    for (let i = 0; i < arr.length; i++) {
        meta[arr[i]]++;
    }

    // 计算排序后的插入位置
    for (let i = 1; i < meta.length; i++) {
        meta[i] = meta[i] + meta[i - 1];
    }

    let copy = [];
    for (let i = arr.length - 1; i >=0; i--) { // 倒序是为了保证稳定性
        const index = meta[arr[i]] - 1; // 获取插入索引
        copy[index] = arr[i]; 
        meta[arr[i]]--; // 
    }

    for (let i = 0; i < copy.length; i++) {
        arr[i] = copy[i];
    }
}

var arr = [2,5,3,0,2,3,0,3];
counting_star(arr);
console.dir(arr);