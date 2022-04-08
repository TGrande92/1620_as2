const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]



const noteLocation = document.querySelector(".note-area")
const noteBtn = document.querySelector(".fa-circle-plus")

noteBtn.addEventListener("click", (evt) => {
  var textarea = document.getElementById('textarea');
  console.log(textarea)
  if(textarea === null){
    textarea = document.createElement("textarea");
    textarea.id = 'textarea';
    textarea.rows = 30;
    textarea.cols = 50;
    noteLocation.append(textarea);
    } else{
    console.log(notes);
    }
  })