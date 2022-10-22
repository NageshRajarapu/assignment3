// #1 pattern

let num = 4;
let string1 = "";
let k = 1;

for(let i=0;i<num;i++) {
    for(let j=0;j<=i;j++) {
        string1 += k++ +" ";
    }
    string1 += "\n";
}

console.log(string1);
console.log();

// #2 Write a program to find whether a given number
// is armstrong or not

let num1 = 153;
let temp1 = num1
let rem;
let res = 0;
while(num1>0) {
    rem = num1%10;
    res = res + rem*rem*rem;
    num1 = parseInt(num1/10);
}

if(temp1==res)
    console.log("Armstrong number");
else
    console.log("Not armstrong number");

console.log();

// #3 Write a program to find whether a given number
// is special number or not

let num2 = 145;
let temp2 = num2;
let remind;
let result = 0;

while(num2>0) {
    remind = num2%10;
    result = result + fact(remind);
    num2 = parseInt(num2/10);
}

if(temp2 == result)
    console.log("Special number");
else
    console.log("Not special number");

function fact(num) {
    if(num ==0 || num ==1)
        return 1;
    else
        return num * fact(num-1);
}