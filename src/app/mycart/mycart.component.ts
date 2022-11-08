import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  myCartList: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe({
      next: (res) => {
        this.myCartList = res;
      },
       error:(err) => {
        alert('Error in retriving the data')
      }
    })
  }

}
