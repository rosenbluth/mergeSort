var myArr = [7,6,1,9,4,3,8];

console.log(myArr);
function merge(myArr) {
    if (myArr.length > 1) {

        var middle = myArr[Math.round((myArr.length - 1) / 2)];
        var firstHalf = myArr.slice(0, middle);
        var secondHalf = myArr.slice(middle + 1, myArr.length - 1);
        merge(firstHalf);
        merge(secondHalf);
        var i = 0;
        var j = 0;
        var k = 0;
        while (i < firstHalf.length && j < secondHalf.length) {
            if (firstHalf[i] < secondHalf[j]) {
                myArr[k] = firstHalf[i];
                i += 1;
            } else {
                myArr[k] = secondHalf[j];
                j += 1;
            }
            k += 1;
        }

        while (i < firstHalf.length) {
            myArr[k] = firstHalf[i];
            i += 1;
            k += 1;
        }
        while (j < secondHalf.length) {
            myArr[k] = secondHalf[j];
            j += 1;
            k += 1;
        }
    }

}
console.log();
