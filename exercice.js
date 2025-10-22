var x = 1;
let y = 2;

function test() {
    var x = 10;
    y = 20;
    console.log(x, y);
}

if (true) {
    let x = 100;
    let y = 200;
    console.log(x, y);
}

test();
console.log(x, y);