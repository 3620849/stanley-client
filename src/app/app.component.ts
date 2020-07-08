import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewBookDialogComponent } from './new-book-dialog/new-book-dialog.component';
import { BookService } from './book.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BuyDialogComponent } from './buy-dialog/buy-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  title = 'stanley-client';
  value = "search text";
  loading: boolean = true;
  displayedColumns: string[] = ['author', 'name', 'qty', 'action'];
  dataSource: Book[];

  constructor(public bookSrv: BookService, public dialog: MatDialog, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.updateTable();
  }
  updateTable() {
    // this.dataSource=[{author: "fdffd",
    //   name: "string",
    //   qty: 1,
    //   buy_amount: 0,
    //   id:1}]
    //   this.loading = false;
    this.bookSrv.getBookList().subscribe(res => {
      this.dataSource = res['bookList'].
        map(el => { return { id: el.id, qty: el.quantity, name: el.book.bookName, buy_amount: 0, author: el.book.author.authorName } });
      this.loading = false;
    }, error => {
      this.loading = false;
    })
  };

  openDialog(): void {
    const dialogRef = this.dialog.open(NewBookDialogComponent, {
      width: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
      console.log('The dialog was closed', result);
      this.bookSrv.addNewBook(result.bookName, result.authorName, result.qty).subscribe(
        res => {
          this.updateTable();
          this._snackBar.open("Book added", "OK", {
            duration: 2000,
          });
        
        }, err => {
          console.log("error is : ", err);
          this._snackBar.open(err.error.message, "error", {
            duration: 2000,
          });
        }
      )
      }
    });
  }


  search() {
    this.loading = true;
    this.bookSrv.getSearchBook(this.value).subscribe(res => {
      this.dataSource = res['bookList'].
        map(el => { return { id: el.id, qty: el.quantity, name: el.book.bookName, buy_amount: 0, author: el.book.author.authorName } });
      this.loading = false;
    }, error => {
      this.loading = false;
    })
  }

  buyBook(book) {
    this.bookSrv.buyBook(book.id, -book.buy_amount).subscribe(res => {
      const dialogRef = this.dialog.open(BuyDialogComponent, {
        width: '350px',
        data: res
      });

      dialogRef.afterClosed().subscribe(result => {
        this.loading = true;
        this.updateTable();
      });

    }, err => {
      console.log("error is : ", err);
      this._snackBar.open(err.error.message, "error", {
        duration: 2000,
      });
    })


  }

  add(element) {
    if (element.qty > element.buy_amount) {
      element.buy_amount = 1 + element.buy_amount;
    }
  }
  remove(element) {
    if (element.buy_amount > 0) {
      element.buy_amount = element.buy_amount - 1;
    }
  }
}
export interface Book {
  author: string;
  name: string;
  qty: number;
  buy_amount: number;
  id: number
}