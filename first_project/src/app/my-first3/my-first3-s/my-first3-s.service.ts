import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirst3SService {

  constructor() { }

  getFolders(){
    return ['my-first3-m (that contains a module to exporting this component content to application on browser module)', 'my-first-c (that contains the component files)', 'my-first3-s (that contains the service)']
  }

  getPassword(){
    return 'asdf134567banu761'
  }
}
