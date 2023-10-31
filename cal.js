let display=document.getElementById('display');
let buttons=document.querySelectorAll('.button button');





buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        console.log(value);
    });
});

