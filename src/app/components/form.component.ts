import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Album } from '../models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  constructor(private dialogRef: MatDialogRef<FormComponent>) {}

  ngOnInit() {
  }

  save(form: NgForm) {
    console.log("Save");
    const album: Album = {
      name: form.value.name,
      artist: form.value.artist,
      rating: form.value.rating,
      imageUrl: form.value.imageUrl
    };

    console.log("New album: ", album);
    this.dialogRef.close();
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
