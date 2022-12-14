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
let deletes = document.getElementById("delete");

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
let allowed = true;
dotNumber.addEventListener("click", (e) => {
    if(allowed) {
        let display = document.getElementById("ndot").innerText;
        screen.value += display;
        allowed = false;
    } 
    
    // if(screen.value == "" ||
    // screen.value == Number(screen.value)) {
    //     screen.value += display;
    // }
// if(!screen.value.includes('.')) {
//     screen.value += display;
// }
    // else if(screen.value ==""){
    //     screen.value += display;    
    // }

// if(screen.value == "" || /\d{,}[+-/*]/.test(screen.value) || /[+-/*]\d/.test(screen.value)){
//         screen.value += display; 
//     }


    
});

// THE OPERATORS BUTTONS

// The equal button
buttons.addEventListener("click", function(e) {
    let display = document.getElementById("equal").innerText;
    screen.value = eval(screen.value);
    if(screen.value.includes(".")) {
        allowed = false;
    }
    else{
        allowed = true;
    }
});

// The clear all button
clear.addEventListener("click", function(e) {
    let display = document.getElementById("erase");
    screen.value = "";
    allowed = true;
});

plus.addEventListener("click", function(e) {
    let display = document.getElementById("plus").innerText;
    screen.value += display;
    allowed = true;   

});
// The subtract button
minus.addEventListener("click", function(e) {
    let display = document.getElementById("minus").innerText;
    screen.value += display;
    allowed = true;
});
// The multiply button
multiply.addEventListener("click", function(e) {
    let display = document.getElementById("multiply").innerText;
    screen.value += display;
    allowed = true;
});
// The Division button
division.addEventListener("click", function(e) {
    let display = document.getElementById("division").innerText;
    screen.value += display;
    allowed = true;
    
});

// The Delete button
deletes.addEventListener("click", () => {
    if(screen.value[screen.value.length -1] == "."){
        screen.value = screen.value.slice(0,-1)
        allowed = true;
    }
    else{
        screen.value = screen.value.slice(0,-1)
    }
})
