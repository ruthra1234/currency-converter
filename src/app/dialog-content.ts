import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.html',
  styleUrls: ['dialog-data.css']
})
export class DialogContent {
  
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentDialog, {

       height: '280px',
       width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-dialog',
  templateUrl: 'dialog-content-dialog.html',
})
export class DialogContentDialog {}


