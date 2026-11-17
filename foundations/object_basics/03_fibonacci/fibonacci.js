const fibonacci = function (n) {
    if (n === 1){
        return 1;
    } else if (n <= 0 || Number.isNaN(n) || typeof n !== 'number'){
        return "OOPS";
    }
    let fsebelum = 0;
    let fsesudah = 1;
    let fsebelumtemporer = 0;
    let fsesudahtemporer = 0;
    for (let i = 1; i < n; i++) {
        fsebelumtemporer = fsesudah;
        fsesudahtemporer = fsebelum + fsesudah;

        fsebelum = fsebelumtemporer;
        fsesudah = fsesudahtemporer;
    }
    return fsesudahtemporer;
};

// Do not edit below this line
module.exports = fibonacci;
