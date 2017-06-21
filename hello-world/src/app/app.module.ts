import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/helloWorld.component';
import { HelloWorldDisplayComponent} from './hello-world/helloWorldDisplay.component';



@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloWorldDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
