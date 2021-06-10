import { Component, OnInit } from '@angular/core';

class Note {
  title: string = '';
  desc: string = '';
  img: string = "https://ktconnections.com/images/hosted.png";
  

}

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  textbg = "violet";
  taskdate: string = "";
  taskdesc: string = "";
  
  notesList: Array<Note> = [];
  note: Note = new Note();

  onChangeText(event: any) {
    if (event.target.name == "txtdate") {
      this.taskdate = event.target.value;
    }
    else if (event.target.name == "txtdesc") {
      this.taskdesc = event.target.value;
    }
    
    
  }

  addNotes() {
    // console.log(this.noteTittle);
    // console.log(this.noteDesc);
    this.note.title = this.taskdate;
    this.note.desc = this.taskdesc;
    this.note.img= "https://abyte.stream/assets/img_5a9b6290e8d26.png";
  
    this.notesList.push(this.note);
    console.log(this.notesList);

    this.taskdate = "";
    this.taskdesc= "";
    

//new task 1
    this.note = new Note();
    this.note.title = "Mongo DB learning";
    this.note.desc = "Task need to be completed i.e need to learn Mongo DB ";
    this.note.img = "https://cdn.buttercms.com/6IOYf3uRJMGxcpXMTswN";

    this.notesList.push(this.note);
    console.log(this.notesList);

//new task 2

this.note = new Note();
    this.note.title = "Learn Programming";
    this.note.desc = "Need to be completed on expected date";
    this.note.img = "https://miro.medium.com/max/881/1*J8sjpKQJswCKiPUYVefbgQ.jpeg";

    this.notesList.push(this.note);
    console.log(this.notesList);

   
//getting input from text


  }

}
