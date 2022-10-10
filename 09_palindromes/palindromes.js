const palindromes = function (string) {
    // debugger;
    let specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=".split("");
    const arr = string.toLowerCase().split("");
    let newArray = [];
    let reversedArray = []
    arr.map(ele => {
        if (!specialChars.includes(ele) && ele !== " ") {
            newArray.push(ele);
            reversedArray.unshift(ele);
        }
        
    });
        return newArray.join() === reversedArray.join();
};


// Do not edit below this line
module.exports = palindromes;
