import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { credentials } from './credentials';

@Injectable({
  providedIn: 'root'
})
export class ForPassingCredentialsService {

  s = new Subject<number>();

  constructor() { }
}
