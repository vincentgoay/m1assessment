import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormComponent } from './components/form.component';
import { Album } from './models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'm1d5assessment';

  albums: Album[] = [];

  constructor(private dialog: MatDialog) { }

  openDialog() {
    console.log("Open Dialog Executed")

    const dialogRef = this.dialog.open(FormComponent);

    dialogRef.afterClosed().subscribe(newAlbum => {
      console.log("Form Result: ", newAlbum);

      if(newAlbum == null)
        this.albums.push(newAlbum);
    });
  }

}
