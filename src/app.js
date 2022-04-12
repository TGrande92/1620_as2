const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

//create text area
const textArea = document.createElement("textarea");
textArea.id = 'textarea1';
textArea.rows = 30;
textArea.cols = 50;

//create save button
const saveBut = document.createElement("button")
saveBut.id = 'idcancel'
saveBut.textContent = 'Save'

//create cancel button
const canBut = document.createElement("button");
const canBut1 = document.createElement("button");
canBut.id = 'classcancel';
canBut.textContent = 'cancel';
canBut1.textContent = 'X'

//global variables
var textAreaEle = document.getElementById('textArea1');
const noteLocation = document.querySelector(".create-note-area");
const noteBtn = document.querySelector(".fa-circle-plus");
//textarea function and cancel function
function createTextBox() {
  textArea.value = ''
  noteLocation.append(textArea)
  noteLocation.append(saveBut)
  noteLocation.append(canBut)


  noteBtn.removeEventListener("click", createTextBox)



  const canButEle = document.querySelector('#classcancel')
  canButEle.addEventListener("click", (evt) => {
      const textAreaEle = document.getElementById('textarea1')
      const saveButEle = document.querySelector('#idcancel')

      canButEle.remove()
      saveButEle.remove()
      textAreaEle.remove()

    noteBtn.addEventListener("click", createTextBox)
  })
}
noteBtn.addEventListener("click", createTextBox)
// save button functions
saveBut.addEventListener("click", (evt) => {
  let textAreaValue = noteLocation.querySelector('#textarea1').value
  let textAreaTitle = textAreaValue.split('\n')
  notes.push({title: textAreaTitle[0], noteBody: textAreaValue, id: notes.length + 1})
  const canButEle = document.querySelector('#classcancel')
  let textAreaEle = document.getElementById('textarea1')
  let saveButEle = document.querySelector('#idcancel')

  canButEle.remove()
  saveButEle.remove()
  textAreaEle.remove()
  let liAdd = document.createElement("li")
  liAdd.textContent = notes[notes.length - 1].title
  liAdd.id = notes.length
  const notesList = document.querySelector('.notes-list')
  notesList.append(liAdd)
  noteBtn.addEventListener("click", createTextBox)


// 

  const readNote = document.querySelector(".read-note-area");
  let pTag = document.createElement("p")
  let h2Add = document.createElement("h2")
  let divOne = document.createElement("div")
  divOne.className = 'noteDiv'
  
  let idNum = notes.length 
  let idNumStr = idNum.toString()
  let liID = document.getElementById(idNumStr)
  let idStrToNum = Number(liID.id)
  liID.addEventListener("click", (evt =>{

    h2Add.textContent = notes[idStrToNum - 1].title
    divOne.remove()
    readNote.append(divOne)
    divOne.append(h2Add)
    divOne.append(pTag)
    divOne.append(canBut1)

    pTag.innerHTML = notes[idStrToNum - 1].noteBody

    canBut1.addEventListener("click", (evt) =>{
      divOne.remove()
    })
  }))

  
  })

