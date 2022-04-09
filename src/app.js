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

var textAreaEle = document.getElementById('textArea1');
const noteLocation = document.querySelector(".create-note-area");
const noteBtn = document.querySelector(".fa-circle-plus");

function createTextBox() {
  textArea.value = ''
  noteLocation.append(textArea)
  noteLocation.append(saveBut)
  noteLocation.append(canBut)


  noteBtn.removeEventListener("click", createTextBox)



  const canButEle = document.querySelector('#classcancel')
  canButEle.addEventListener("click", (evt) => {
      let textAreaEle = document.getElementById('textarea1')
      let saveButEle = document.querySelector('#idcancel')

      canButEle.remove()
      saveButEle.remove()
      textAreaEle.remove()

    noteBtn.addEventListener("click", createTextBox)
  })
}
noteBtn.addEventListener("click", createTextBox)

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
  const notesList = document.querySelector('.notes-list')
  notesList.append(liAdd)
  noteBtn.addEventListener("click", createTextBox)
})



