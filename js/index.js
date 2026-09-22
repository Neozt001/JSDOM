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
// Task 3
function changeClass(item, atr){
    
    item.setAttribute("class", atr);
}
changeClass(e2, "healthy")
// Task 4
function deleteElement(item){
    item.remove();
}

deleteElement(e2)

// function add(){
//     let a = document.getElementById("add").value;
//     addElement(a, "healthy")
//     let list = document.getElementById(id);
//     list.appendChild(a);
// }
function add(){
    let text = document.getElementById("add").value;
    let item = createElement(5, text, "healthy")
    addElement("list", item)
}

// document.getElementById("addButton").addEventListener("mouseover", add);
document.getElementById("addButton").addEventListener("click", add);
console.log("Shoppinglist End")
