import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getBookList(){
    return this.http.get(environment.base_url+"/books");
  }
  getSearchBook(keyword:string){
    return this.http.get(environment.base_url+"/books/"+keyword);
  }
  buyBook(bookId:number,qty:number){
    return this.http.post(environment.base_url+"/buyBook/"+bookId+"?qty="+qty,null);
  }
  fetchOrder(orderId:number){
    return this.http.get(environment.base_url+"/order/"+orderId);
  }
  addNewBook(bookName:string,authorName:string,quantity:number){
    return this.http.put(environment.base_url+"/addBook",{
      bookName:bookName,
      authorName:authorName,
	    quantity:quantity
    });
  }
}
