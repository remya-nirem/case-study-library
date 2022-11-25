import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})

export class AddbookComponent implements OnInit {

  bookform: any = new FormGroup({
    'bookid': new FormControl('',[Validators.required]),
    'title': new FormControl('',[Validators.required]),
    'description': new FormControl('',[Validators.required]),
    'author': new FormControl('',[Validators.required]),
    'publisher': new FormControl(''),
    'pages': new FormControl(''),
    'genre': new FormControl(''),
    'status': new FormControl('')
  })

  constructor(private api:ApiService, private router : Router) { }

  ngOnInit(): void {
  }

  sendBook(){
    this.api.addBook(this.bookform.value).subscribe(res =>{
      this.bookform.reset();
      this.router.navigate(['main']);
    })
  }

}
