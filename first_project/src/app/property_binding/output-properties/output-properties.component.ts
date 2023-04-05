import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { EventBroadcastService } from "../broadcast-services/event-broadcast.service";

@Component({
  selector: 'counter',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css'],
  providers: [EventBroadcastService]
})
export class OutputPropertiesComponent implements OnInit{

  constructor(private _eventbroadcast: EventBroadcastService){}

  @Input('value') resultvalue: number = 0;
  @Output('changevalue') changevalue = new EventEmitter();
  @ViewChild('outputinput') output!: ElementRef;

  btnclicked: boolean = false;

  sumValue(){
    this.resultvalue ++;
    console.log(this.output.nativeElement.value);
    this.changevalue.emit({new_value: this.resultvalue});
    this.btnclicked = !this.btnclicked;
  }

  decreaseValue(){
    this.resultvalue --;
    console.log(this.output.nativeElement.value);
    this.changevalue.emit({new_value: this.resultvalue});
    this.btnclicked = !this.btnclicked;
  }
  
  courses: string[] = [];
  saveCourse(course: string){
    this._eventbroadcast.addCourse(course);
  }
  
  ngOnInit(){
    this.courses = this._eventbroadcast.getCourse();

    /*this._eventbroadcast.emitAddedCourse.subscribe(
      (course) => console.log(course)
    );*/

    EventBroadcastService.newCourse.subscribe(
      course => this.courses.push(course)
    );
  }
}