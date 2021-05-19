let children = []

if(localStorage.getItem("tester")){
    children=JSON.parse(localStorage.getItem("tester"))
} else {
    children = []
}

let value = localStorage.getItem("index")

let indexId = 1

if(value){
    indexId = parseInt(value)
}

function save(){
    let child = {
       id: indexId,
       continutToDo: document.getElementById("todo-input").value,
        checkIfDone: false
    };
    indexId = indexId + 1
    localStorage.setItem("index", indexId)
    children.push(child)
    localStorage.setItem("tester", JSON.stringify(children))
}

let input = document.getElementById("todo-input")
input.addEventListener("keyup", function (event){
    if (event.key === "Enter") {
        save()
        location.reload()
    }
})

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
    newButton.addEventListener("click",()=>{
        remove(continutToDo)
    })

    newElement.append(newInput, newLabel, newButton)
    newElement.classList.add("principal")

    let lista = document.querySelector('#lista')
    lista.appendChild(createItem(newElement))
}

function toggleChecked(checked = true){

    for(let i = 0; i <children.length;i++){
        children[i].checkIfDone = checked
    }

    let checkedToggle = document.querySelectorAll('input[name="lista-curenta"]')
    checkedToggle.forEach((li) => {
        li.checked = checked
    });

    console.log(children)
    localStorage.setItem("tester", JSON.stringify(children))
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
    indexId = indexId - 1
    localStorage.setItem("index", indexId)
    localStorage.setItem("tester", JSON.stringify(children))
    location.reload()
}

if(children.length === 1){
    document.getElementById("todo-co").innerHTML = children.length + " item left"
} else {
    document.getElementById("todo-co").innerHTML = children.length + " items left"
}

function checkedList(){
    for(let i = 0; i<children.length; i++){
        let chk = document.getElementById(i).checked
        if(chk === true){
            children[i].checkIfDone = true
            chk.checked = true
        } else {
            children[i].checkIfDone = false
            chk.checked = false
        }
    }
}

let x = document.getElementsByName("lista-curenta")
x.onclick = checkedList()

console.log(children)