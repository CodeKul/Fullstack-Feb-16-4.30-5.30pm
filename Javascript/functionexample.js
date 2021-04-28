
showMsg();


function showMsg() {
    var a = "Hi Welcome to codekul"

    console.log(a);
}

// function variable

var SonaliMsg = function () {
    console.log("Hi, This ia Sonali...");
    return "Hi This a Sonali" + 25 + "age";
}

document.write(SonaliMsg());

SonaliMsg();
console.log(SonaliMsg());


function add(a,b) {
   var a;
   var b;

    var add = a+b;
    
    // console.log("addition:" + add);
    return add ;

   
}

var c;

console.log(add(50,20));


// () => {
//     console.log("arrow function")
// }

var welcome =  (function () {
    console.log("Welcome to Variable Function");
})();


(function () {
    document.write("Anonymous Function");
})();





var hello = () => {
    console.log("Hello")
}
// welcome();
hello();

document.write("\n Data type of hello :" + typeof(hello));


var b =( function ()
 {
    console.log("Hi This is function example")
}) ();


var PravinMsg = Function(
    console.log("Hi This a Pravin"),
    document.write("Hi This Pravin")
)


PravinMsg();
add(25,30);

add(30,30);




