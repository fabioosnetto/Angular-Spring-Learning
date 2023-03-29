import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-first-c',
  templateUrl: './my-first-c.component.html',
  styleUrls: ['./my-first-c.component.css']
})
export class MyFirstCComponent implements OnInit {
  
  folders: string[] = ['my-first3-m (that contains a module to exporting this component content to application on browser module)', 'my-first-c (that contains the component files)'];
  
  constructor(){
  }

  ngOnInit(){
  }
}
