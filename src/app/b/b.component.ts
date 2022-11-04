import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { credentials } from '../credentials';
import { Subscriber } from 'rxjs';

import { ForPassingCredentialsService } from '../for-passing-credentials.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit, AfterViewChecked {

  credentialsArray2: credentials[] = [];
  cred2: credentials = {quantity:0,unitPrice:0};
  test2:number = 3;

  constructor(private obsb: ForPassingCredentialsService) { }

  ngOnInit(): void {
    this.obsb.s.subscribe((data) =>{
      this.test2 = data;
      console.log(this.test2);
    })
  }

  ngAfterViewChecked(){
    // console.log("from a");
    // console.log(this.cred2);
    // this.credentialsArray2.push(this.cred2)
    // console.log(this.credentialsArray2);
  }

}
