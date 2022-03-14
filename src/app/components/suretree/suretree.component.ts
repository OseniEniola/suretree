import { Component, OnInit } from '@angular/core';
import { PostService } from '../service';
import { Injectable } from '@angular/core';
/* export interface Data{
    amount: 50000.00,
    beneficiary: "Suretree"
} */

@Component({
  selector: 'app-suretree',
  templateUrl: './suretree.component.html',
  styleUrls: ['./suretree.component.scss']
})
export class SuretreeComponent implements OnInit {
  cvv: string = ''
  month: string= ''
  year:string = ""
  cardNo:string= ""

  constructor(private post: PostService) { }
  userData = {
    amount: 40000,
    beneficiary: 'Suretree'
  }
  ngOnInit(): void {
    
  }
//suretree@yopmail.com
  postData(){
    let data = {beneficiary: this.userData.beneficiary,
    amount:this.userData.amount,
    cvv: this.cvv,
    month: this.month,
    year:this.year,
    cardNo:this.cardNo
  }
    this.post.postDate(JSON.stringify(data))
  }

}
