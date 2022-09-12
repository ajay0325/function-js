// Function Declaration

function car(a,b) {
    return a+b;
  }
console.log(car(5,5));  
  
console.log(car);

// Function Expression

const ajay =  function (a,b) {
    return a*b;
}

console.log(ajay(5,5));

const aj = function () {
    var a = 10;
    var b = 10;
    console.log(a+b);
}
aj();

// Arrow Function

const ab = () => {
    return 10+10;
}
console.log(ab());

const bc = () => 10+10;
console.log(bc());

function abc(bc) {
    return bc;
}

console.log(abc())

