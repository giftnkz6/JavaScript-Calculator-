let buttons = document.querySelectorAll(".btn");
let screen = document.getElementById("screen");

// buttons.addEventListener('click', () => {
//     alert("Hello Hi");
// });
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(e) {
        // alert("Ngamandla");
        let display = document.getElementsByClassName("btn").textContent;
    
        screen.innerHTML += display;
        



    });

}
// function clicked() {
//     alert("Hello Hi");
// }
