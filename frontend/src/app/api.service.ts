import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:3000';
  //apiUrl: String = 'api';

  login(data:any) {
    return this.http.post<any>(`${this.apiUrl}/apiuser/login`,data);
  }

  signup(data:any){
    return this.http.post<any>(`${this.apiUrl}/apiuser/signup`,data);
  }

  getBooklist(){
    return this.http.get(`${this.apiUrl}/apibook/booklist`);
  }

  addBook(data: any){
    return this.http.post(`${this.apiUrl}/apibook/book`,data);
  }

  updateBook(data:any){
    return this.http.put(`${this.apiUrl}/apibook/book`,data);
  }

  deleteBook(id: any){
    return this.http.delete(`${this.apiUrl}/apibook/book/${id}`);
  }

  getBookDetail(id:any){
    return this.http.get(`${this.apiUrl}/apibook/book/${id}`);
  }

}
