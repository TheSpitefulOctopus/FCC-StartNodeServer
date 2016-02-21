
var num = 0;
var numbers = process.argv;
for (var i =0; i < numbers.length; i++) {
    num += parseInt(numbers[i]);
}
console.log(num);