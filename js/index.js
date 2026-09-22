//Write your Javascript code here
console.log("Shoppinglist")
//Task 1
function createElement(id, textnode, atr){
    let newElement = document.createElement("li");
    newElement.setAttribute("id", id);
    newElement.setAttribute("class", atr);
    newTextNode = document.createTextNode(textnode);
    newElement.appendChild(newTextNode);
    
    return newElement;

}
// let list = document.getElementById("list");
// list.appendChild(addElement("Coke", "unhealthy"))
let e = createElement("4", "COLA", "unhealthy")
let e2 = createElement("4", "COLA", "unhealthy")
console.log(e)
// Task 2
function addElement(id, item){
    let list = document.getElementById(id);
    list.appendChild(item);
}
addElement("list", e)
addElement("list", e2)

console.log("Shoppinglist End")