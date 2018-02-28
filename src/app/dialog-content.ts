import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.html'
  
})
export class DialogContent {
  
  name:string;
  showHide:bool;
  
 constructor() {
    this.showHide = false;
  }
  
 changeShowStatus(){
    this.showHide = !this.showHide;
  }

 }




@Component({
  selector: 'dialog-content-dialog',
  templateUrl: 'dialog-content-dialog.html',
})
export class DialogContentDialog {}


