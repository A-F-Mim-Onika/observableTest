import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { credentials } from '../credentials';
import { Subject, Observable } from 'rxjs';
import { ForPassingCredentialsService } from '../for-passing-credentials.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit, AfterViewChecked  {

  credentialsArray: credentials[] = [];
  cred: credentials = {quantity:0,unitPrice:0};
  test:number = 4;

  constructor(private obsa: ForPassingCredentialsService) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(){
    console.log("from a");
    console.log(this.cred.quantity);
    console.log(this.cred.unitPrice);
    console.log(this.cred);
    this.credentialsArray.push(this.cred)
    console.log(this.credentialsArray);
  }

  functionToSendData(){
    this.obsa.s.next(this.test);
  }

  



}
