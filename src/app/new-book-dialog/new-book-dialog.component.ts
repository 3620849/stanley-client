import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-new-book-dialog',
  templateUrl: './new-book-dialog.component.html',
  styleUrls: ['./new-book-dialog.component.scss']
})
export class NewBookDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<NewBookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}
