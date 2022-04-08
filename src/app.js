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
textArea.textContent = 'Write your new note here!'

//create save button
const saveBut = document.createElement("button")
saveBut.id = 'idcancel'
saveBut.textContent = 'Save'

//create cancel button
const canBut = document.createElement("button");
canBut.id = 'classcancel';
canBut.textContent = 'cancel';

var textAreaEle = document.getElementById('textArea1');
const noteLocation = document.querySelector(".create-note-area");
const noteBtn = document.querySelector(".fa-circle-plus");

function createTextBox() {
  noteLocation.append(textArea)
  noteLocation.append(saveBut)
  noteLocation.append(canBut)


  noteBtn.removeEventListener("click", createTextBox)



  const canButEle = document.querySelector('#classcancel')
  canButEle.addEventListener("click", (evt) => {
      textAreaEle = document.getElementById('textarea1')
      saveButEle = document.querySelector('#idcancel')

      canButEle.remove()
      saveButEle.remove()
      textAreaEle.remove()

    noteBtn.addEventListener("click", createTextBox)
  })
}
noteBtn.addEventListener("click", createTextBox)


