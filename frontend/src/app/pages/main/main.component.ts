import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  books: any=[];

  constructor(private api: ApiService, private router : Router) { }
  
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.api.getBooklist().subscribe(res =>{
       this.books = res;
    })
  }

  addBook(){
    this.router.navigate(['addbook']);   
  }

  editBook(id:any){
    this.router.navigate(['editbook',id]);
  }

  deleteBook(id:any){
    this.api.deleteBook(id).subscribe(res =>{
      this.books = this.getData();
    })
  }
}
