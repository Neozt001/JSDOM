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
let e = createElement("", "COLA", "healthy")
console.log(e)
console.log("Shoppinglist End")