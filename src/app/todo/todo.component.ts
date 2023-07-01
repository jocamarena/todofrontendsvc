import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(  
    public id: number,
    public desc: string,
    public date: Date
    ){}
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  todos = [
    new Todo(1, 'my desc1', new Date('December 17, 1995 03:24:00')),
    new Todo(2, 'my desc2', new Date('1995-12-17T03:24:00')),
    new Todo(3, 'my desc3', new Date(2023, 2, 12))
  ]
  constructor(){}
  ngOnInit(): void {
    
  }

}
