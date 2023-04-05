import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventBroadcastService {

  emitAddedCourse = new EventEmitter<string>();
  static newCourse = new EventEmitter<string>();

  private _courses_service: string[] = ['Como Treinar Seu Dragão', '1 milhão em 1 semana', 'Beber 3 litros de Whiskey sem Morrer']

  getCourse(){
    return this._courses_service;
  }

  addCourse(course: string){
    if(course != ""){this._courses_service.push(course);}
    
    /*this.emitAddedCourse.emit(course);*/
    EventBroadcastService.newCourse.emit(course);
  }

  constructor() { }
}
