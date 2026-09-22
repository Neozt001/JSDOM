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

// Task 5
function changeText(id, text){
    let item = document.getElementById(id);
    // item.setAttribute(item.textContent, text);
    item.textContent = text;
}
changeText(4, "Vand")

// Task 6 
function countItems(list){
    let count = 0;
    for (const item of list){
        console.log(count);
        count++;
    }
    
    return count;
}
console.log(countItems(list))

function add(){
    let text = document.getElementById("add").value;
    let item = createElement(5, text, "healthy")
    addElement("list", item)
}
// document.getElem
// chentById("addButton").addEventListener("mouseover", add);
document.getElementById("addButton").addEventListener("click", add);
console.log("Shoppinglist End")
