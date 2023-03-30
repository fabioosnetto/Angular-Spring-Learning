import { Component, OnInit } from '@angular/core';
import { MyFirst3SService } from "../my-first3-s/my-first3-s.service";

@Component({
  selector: 'my-first-c',
  templateUrl: './my-first-c.component.html',
  styleUrls: ['./my-first-c.component.css']
})
export class MyFirstCComponent implements OnInit {
  
  folders: string[] = [];
  
  constructor(private myfirst3sservice : MyFirst3SService){
    this.folders = this.myfirst3sservice.getFolders();
  }

  ngOnInit(){
  }
}
