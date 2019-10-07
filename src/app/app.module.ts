import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form.component';
import { AlbumComponent } from './components/album.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    FormsModule
=======
    BrowserAnimationsModule
>>>>>>> master
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
