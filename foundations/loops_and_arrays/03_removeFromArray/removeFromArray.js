const removeFromArray = function (arr, ...num) {
    let array = arr.slice();
    let loop;
    if (!Array.isArray(num) || !typeof num == "number") return array;
    do {
        if (array == 0) return array;
        for (const item of array) {
            let check = num.includes(item);
            if (check == true) {
                for (i = 0; i < num.length; i++) {
                    let index = array.indexOf(num[i]);
                    if (index >= 0) { array.splice(index, 1) };
                }
                loop = true;
                break;
            } else if (check == false) {
                loop = false;
            }
        }
    } while (loop == true);

    return array;
}
// Do not edit below this line
module.exports = removeFromArray;
