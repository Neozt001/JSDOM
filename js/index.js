//Write your Javascript code here
console.log("Shoppinglist")

//der tilknyttes en eventlistener til knappen med id=addButton
document.getElementById("addButton").addEventListener('click',addGoods);

let elementInput = document.getElementById('newGoods');

//function der kaldes når der trykkes på knappen
function addGoods(e){
    console.log("In the addgoods function");
    let inputText = (elementInput).value;
    console.log("the input text is : " + inputText);
    
    //kalder funktionen countElements 
    let itemId = countElements("listUnhealthy");
    //kalder funktionen CreateNewElement
    let newLi = CreateNewElement("unhealthy",itemId,inputText);

    //kalder funktionen AppendToList
    AppendToList("listUnhealthy",newLi)
}

//tæller antal elementer i den pågældende liste
//parametre:
//listId: id'en på den liste som der skal tælles på
function countElements(listId){
    return document.getElementById(listId).children.length;
}

//function som appender et elemet til en givelist
//Parametre:
//listId : id attributten på den liste som skal indsættes i
//elementToAppend: et Li element som skal appendes til listen
function AppendToList (listId, elementToAppend){
    document.getElementById(listId).append(elementToAppend)
}

//opretter et nyt Li element
//Parametre:
//classvalue: hvilken værdi class attributten skal have
//idvalue: hvilken værdi id attributten skal have
//content: hvilken tekstværdi som skal vises
function CreateNewElement(classvalue, idvalue, content){

    let newLielement = document.createElement("li")
    newLielement.setAttribute("class",classvalue)
    newLielement.setAttribute("id",idvalue)

    let newTextelement = document.createTextNode(content)

    newLielement.append(newTextelement)

    return newLielement
}


//tilføjer en eventlistener til listen med id=list, som fjerner det element der trykkes på 
document.getElementById("list").addEventListener('click',function(e){
    clickedElement = e.target

    if (e.target && clickedElement.tagName == "LI")
    {
        console.log(clickedElement.textContent + " was clicked")
        
        //ved at sætte elementet til hidden, er det stadig at finde i DOM'en men det vises ikke i browseren
        // clickedElement.setAttribute("hidden","true")

        //remove fjerne elementet 
        clickedElement.remove()
    }
});


