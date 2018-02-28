import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.html'
  
})
export class DialogContent {
  
  name:string;
  showHide:boolean;
  
 constructor() {
    this.showHide = false;
  }
  
 changeShowStatus(){
    this.showHide = !this.showHide;
  }

 }



