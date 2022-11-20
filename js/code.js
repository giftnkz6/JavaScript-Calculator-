let buttons = document.getElementById("btn");
let screen = document.getElementById("screen");


// for(let i = 0; i < buttons.length; i++){
    buttons.addEventListener("click", function(e) {
        // alert("Ngamandla");
        let display = document.getElementById("btn").innerText;
    
        screen.value += display;
        
        



    });

// }
// function clicked() {
//     alert("Hello Hi");
// }
