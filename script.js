let button = document.querySelector(".btn-add");
let inputfield = document.querySelector(".input");
let ulitem = document.querySelector(".ul-item");

button.addEventListener("click", function() {
    //1. get.input value
    let inputvalueitem = inputfield.Value;

    //2.input value li tag
    let li = document.createElement("li");
    
    li.textContent = inputvalueitem;
   
let span = document.createElement('span');
span.textContent = "fa-sharp fa-solid fa-rectangle-xmark"
;
span.addEventListener('clik', function() {
li.remove();
});
 li.appendChild(span);
    ulitem.appendChild(li);
    //3.clear input
    inputfield.Value = " ";
});

document.querySelector('.clearall').addEventListener('click',function(){
    ulitem.innerHTML= " ";
});









