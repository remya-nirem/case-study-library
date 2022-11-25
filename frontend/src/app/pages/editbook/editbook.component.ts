import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  id:any;

  bookform: any = new FormGroup({
    'bookid': new FormControl('',[Validators.required]),
    'title': new FormControl('',[Validators.required]),
    'description': new FormControl('',[Validators.required]),
    'author': new FormControl('',[Validators.required]),
    'publisher': new FormControl(''),
    'pages': new FormControl(''),
    'genre': new FormControl(''),
    'status': new FormControl(''),
    '_id': new FormControl('')
  })

  constructor(private api: ApiService, private activateroute : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activateroute.params.subscribe( params => this.id =  params['id']);
    this.getData(this.id);
  }

  getData(id:any){
    this.api.getBookDetail(id).subscribe(res => {
      this.bookform.patchValue(res);      
    })
  }

  sendBook(){
    this.api.updateBook(this.bookform.value).subscribe(res =>{
        this.router.navigate(['dashboard']);
    })

  }

}
