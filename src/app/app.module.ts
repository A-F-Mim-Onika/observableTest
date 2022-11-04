import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    RouterModule.forRoot(
      [
        {
          path: "a",
          component: AComponent
        },
        {
          path: "b",
          component: BComponent
        }
      ]
    )
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
