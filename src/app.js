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
canBut.id = 'classcancel';
canBut.textContent = 'cancel';

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
  textAreaValue = textAreaValue.split('\n')
  notes.push({title: textAreaValue[0], noteBody: textAreaValue, id: notes.length + 1})
  const canButEle = document.querySelector('#classcancel')
  let textAreaEle = document.getElementById('textarea1')
  let saveButEle = document.querySelector('#idcancel')

  canButEle.remove()
  saveButEle.remove()
  textAreaEle.remove()
  console.log(notes)
  let liAdd = document.createElement("li")
  liAdd.textContent = textAreaValue[0]
  liAdd.id = notes.length + 1
  const notesList = document.querySelector('.notes-list')
  notesList.append(liAdd)
  noteBtn.addEventListener("click", createTextBox)
  })



//open nav title

const noteSelect = document.querySelectorAll(".notes-list");
const readNote = document.querySelector(".read-note-area");

noteSelect.forEach((element) =>
  element.addEventListener("click", (evt) => {
    listNotes = notes.map(({ noteBody }) => noteBody)
    console.log(listNotes)
   // idNotes = notes.map(({ id })) //change this to reference the dictionary id to compare7
    
    // for (let string of listNotes)
    //   for (let item of string)
    //     console.log(item)


    readNote.insertAdjacentHTML("beforeend", notes[1].noteBody);
  })
);

