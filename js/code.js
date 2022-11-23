let buttons = document.getElementById("equal");
let screen = document.getElementById("screen");
let firstNumber = document.getElementById("n1");
let secondNumber = document.getElementById("n2");
let dotNumber = document.getElementById("ndot");
let thirdNumber = document.getElementById("n3");
let fourthNumber = document.getElementById("n4");
let fifthNumber = document.getElementById("n5");
let sixthNumber = document.getElementById("n6");
let seventhNumber = document.getElementById("n7");
let eightNumber = document.getElementById("n8");
let ninethNumber = document.getElementById("n9");
let zeroNumber = document.getElementById("n0");
let clear = document.getElementById("erase");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let division = document.getElementById("division");

// THE NUMBER BUTTONS

// The button 1
firstNumber.addEventListener("click", function(e) {
    let display = document.getElementById("n1").innerText;
    screen.value += display;
});
// The button 2
secondNumber.addEventListener("click", function(e) {
    let display = document.getElementById("n2").innerText;
    screen.value += display;
});
// The button 3
thirdNumber.addEventListener("click", function(e) {
    let display = document.getElementById("n3").innerText;
    screen.value += display;
});
// The button 4
fourthNumber.addEventListener("click", function(e) {
    let display = document.getElementById("n4").innerText;
    screen.value += display;
});
// The button 5
fifthNumber.addEventListener("click", function(e) {
    let display = document.getElementById("n5").innerText;
    screen.value += display;
});
// The button 6
sixthNumber.addEventListener("click", function(e) {
    let display = document.getElementById("n6").innerText;
    screen.value += display;
});
// The button 7
seventhNumber.addEventListener("click", function(e) {
    let display = document.getElementById("n7").innerText;
    screen.value += display;
});
// The button 8
eightNumber.addEventListener("click", function(e) {
    let display = document.getElementById("n8").innerText;
    screen.value += display;
});
// The button 9
ninethNumber.addEventListener("click", function(e) {
    let display = document.getElementById("n9").innerText;
    screen.value += display;
});
// The Zero button
zeroNumber.addEventListener("click", function(e) {
    let display = document.getElementById("n0").innerText;
    screen.value += display;
});
// The Dot button
let operators = document.querySelectorAll(".operators").innerText;
dotNumber.addEventListener("click", function(e) {
    let display = document.getElementById("ndot").innerText;
    // screen.value += display;
    // if(screen.value == "" || screen.value == `${Number(screen.value)}`|| screen.value == `${Number(screen.value)} . + ${(operators)} ${Number(screen.value)}`) {
    //     screen.value += display;
    // }
    // else if(screen.value == `${Number(screen.value)}` || screen.value == (operators)) {
    //     screen.value += display;
    // }

    if(screen.value == "" || screen.value == Number(screen.value) || screen.value == (multiply.innerText) ) {
        screen.value += display
        console.log()
    }
    else if(screen.value == (multiply.innerText) && screen.value == Number(screen.value)){
        screen.value += display
    }
    else if(screen.value == (multiply.innerText)){
        screen.value += operators;
    }
});

// THE OPERATORS BUTTONS

// The equal button
buttons.addEventListener("click", function(e) {
    let display = document.getElementById("equal").innerText;
    if(display == "=" && screen.value == ""){
        screen.value = 0;
    }
    else{
        // screen.value += display;
        screen.value = eval(screen.value);
    }
});

// The clear all button
clear.addEventListener("click", function(e) {
    let display = document.getElementById("erase");
    screen.value = "";
});

plus.addEventListener("click", function(e) {
    let display = document.getElementById("plus").innerText;
    
    if(screen.value == ""){
        screen.value += "";
        alert("Enter a number first");
    }
    else{
        screen.value += display;
    }

});
// The subtract button
minus.addEventListener("click", function(e) {
    let display = document.getElementById("minus").innerText;
    screen.value += display;
    // if(screen.value == ""){
    //     screen.value += "";
    //     alert("Enter a number first");
    // }
    // else{
    //     screen.value += display;
    // }
});
// The multiply button
multiply.addEventListener("click", function(e) {
    let display = document.getElementById("multiply").innerText;
    if(screen.value == ""){
        screen.value += "";
        alert("Enter a number first");
    }
    else{
        screen.value += display;
    }
});
// The Division button
division.addEventListener("click", function(e) {
    let display = document.getElementById("division").innerText;
    if(screen.value == ""){
        screen.value += "";
        alert("Enter a number first");
    }
    else{
        screen.value += display;
    }
});

// function checkDecimal() {
//     if(dispaly ==  "." || screen.value == "" || screen.value == (Numbers(screen.value))
// }