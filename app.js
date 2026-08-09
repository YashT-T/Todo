let add = document.querySelector('.add');
let delBtns = document.querySelectorAll('.delete');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');
let input = document.querySelector('input');

add.addEventListener('click', function(){
    let li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);

    let delBtn = document.createElement('button');
    delBtn.innerText = "Delete";
    li.appendChild(delBtn);
    input.value = "";
});
ul.addEventListener('click',function(event){
    if(event.target.nodeName == "BUTTON"){
        let par = event.target.parentElement;
        par.remove();
    }
});
let clrAll = document.createElement('button');
clrAll.innerText = "Clear All";
document.body.append(clrAll);

clrAll.addEventListener('click', function(){
    ul.innerHTML = "";
})
