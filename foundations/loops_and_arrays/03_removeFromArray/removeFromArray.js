const removeFromArray = function (arr, ...num) {
    let array = arr.slice();
    let loop;
    for (i = 0; i < num.length; i++) {
        let index = array.indexOf(num[i]);
        array.splice(index, 1);
    };

    // do {
    //     for (i = 0; i < num.length; i++) {
    //         let index = array.indexOf(num[i]);
    //         array.splice(index, 1);
    //     }
    //     for (const item of array){
    //         let check = num.includes(item);
    //         if (check == true){
    //             loop = true;
    //         } else if (check == false){
    //             loop = false;
    //         }
    //     }
    // } while (loop == false);

    return array;
}


// Do not edit below this line
module.exports = removeFromArray;
