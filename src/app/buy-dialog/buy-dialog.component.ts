import { Component, OnInit,OnDestroy,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BookService } from '../book.service';

@Component({
  selector: 'app-buy-dialog',
  templateUrl: './buy-dialog.component.html',
  styleUrls: ['./buy-dialog.component.scss']
})
export class BuyDialogComponent implements OnInit {
interval;
loading:boolean=true;
  constructor(public dialogRef: MatDialogRef<BuyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public bookSrv:BookService) { }

  ngOnInit(): void {
    console.log("data in dialog is",this.data);
    this.interval = setInterval(()=>{
      this.bookSrv.fetchOrder(this.data.id).subscribe(res=>{
        this.data=res;
        if(res["status"]!="NEW"){          
          clearInterval(this.interval);
          this.loading=false;
        }
      },err=>{
        this.loading=false;
        clearInterval(this.interval);
      })
    },2000);
  }
  
  ngOnDestroy(){
    clearInterval(this.interval);
  }
  close(){
    this.dialogRef.close();
  }

}
