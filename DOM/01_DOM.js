console.log("DOM");

const parentNodeofHead = document.querySelector('head').parentNode;
console.log(parentNodeofHead);

const prevoiusSibling = document.querySelector('p').previousSibling.value;
console.log(prevoiusSibling);

const value = document.querySelector('h1').value;
console.log(value);

const div = document.querySelector('.bg-black');
var button = document.createElement("input"); // 'b' in 'button' should be lowercase
var text = document.createElement("input");
text.setAttribute("type","number");
button.setAttribute("type", "button"); // Use data-name instead of name
button.setAttribute("value", "myButton"); // Use data-name instead of name
div.append(text);
div.append(button);

button.addEventListener('click',function(event){
    if(text.value=== ""||text.value=== null){
        text.style.border = "1px solid red";
        text.placeholder = "*Enter amount";
     }else{
        text.style.border = "1px solid green";
     }
});
