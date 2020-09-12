import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { MyOwnComponent } from './my-own/my-own.component';
import { MyOwnComponentNo2 } from './my-own-no2/my-own-no2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    MyOwnComponent,
    MyOwnComponentNo2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
