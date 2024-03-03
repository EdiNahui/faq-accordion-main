let buttons = document.getElementsByClassName('button');
console.log(buttons);


for (let button of buttons) {
    button.addEventListener('click', (event) => {
        if (button.src.includes("plus")) {
            button.src = "/assets/images/icon-minus.svg"; 
              button.parentElement.nextSibling.nextSibling.style.display = "contents";  

             
            
        }

        else {
            button.src = "/assets/images/icon-plus.svg";
            button.parentElement.nextSibling.nextSibling.style.display = "none";
        }
    })
}


