let container = document.getElementsByClassName("container")

let children = [
    {
        "id":1,
        "continutToDo":"Codul in html",
    },
    {
        "id":2,
        "continutToDo":"Codul in css",
    },
    {
        "id":3,
        "continutToDo":"Codul in javascript",
    }
]

function createItem(a){
    let newList = document.createElement("li")
    newList.append(a)
    return newList
}


for (let i = 0; i<children.length;i++) {
    let current = children[i]
    let id = current.id
    let continutToDo = current.continutToDo

    let newElement = document.createElement("div")

    let newInput = document.createElement("input")
    newInput.id = id
    newInput.name = id
    newInput.type = "checkbox"
    newInput.classList.add("toggle")

    let newLabel = document.createElement("label")
    newLabel.htmlFor = name
    newLabel.innerHTML = continutToDo

    newElement.append(newInput, newLabel)
    newElement.classList.add("principal")

    let lista = document.querySelector('#lista')
    lista.appendChild(createItem(newElement))
}

console.log(children)