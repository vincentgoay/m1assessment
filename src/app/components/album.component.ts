import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Album } from '../models';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  //---------------------------------------
  // Properties
  //---------------------------------------
  
  //---------------------------------------
  // Inputs / Outputs
  //---------------------------------------
  @Output() onNewAlbum = new EventEmitter<Album>();

  //---------------------------------------
  // Initialization
  //---------------------------------------
  constructor() { }

  ngOnInit() {
  }
  
  //---------------------------------------
  // Functions / Methods
  //---------------------------------------
  process($event: NgForm) {

  }
}
