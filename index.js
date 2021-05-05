if(localStorage.getItem("tester")){
    children=JSON.parse(localStorage.getItem("tester"))
} else {
    children = []
}

function save(){
    let child = {
       id: 1,
       continutToDo: document.getElementById("todo-input").value
    };
    children.push(child)
    localStorage.setItem("tester", JSON.stringify(children))
}

let input = document.getElementById("todo-input")
input.addEventListener("keyup", function (event){
    if (event.key === "Enter") {
        location.reload()
        save()
    }
})

//children = []

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
    newInput.name = "lista-curenta"
    newInput.type = "checkbox"
    newInput.classList.add("toggle")

    let newLabel = document.createElement("label")
    newLabel.htmlFor = name
    newLabel.innerHTML = continutToDo

    let newButton = document.createElement("button")
    newButton.classList.add("delete")
    newButton.addEventListener("click", remove)

    newElement.append(newInput, newLabel, newButton)
    newElement.classList.add("principal")

    let lista = document.querySelector('#lista')
    lista.appendChild(createItem(newElement))
}

function toggleChecked(checked = true){

    let checkedToggle = document.querySelectorAll('input[name="lista-curenta"]')
    checkedToggle.forEach((li) => {
        li.checked = checked
    });
}

let checkBox = document.getElementById("toggle-all")
checkBox.onclick = checkAll

function checkAll(){
    toggleChecked()
    this.onclick = uncheckAll
}

function uncheckAll(){
    toggleChecked(false)
    this.onclick = checkAll
}

function remove(continutToDo){
    let children=JSON.parse(localStorage.getItem("tester"))
    for(let i = 0; i < children.length; i++){
        if(children[i].continutToDo === continutToDo){
            children.splice(i,1);
            break;
        }
    }
    localStorage.setItem("tester", JSON.stringify(children))
    location.reload()
}

console.log(children)