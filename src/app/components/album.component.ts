import { Component, OnInit, Input } from '@angular/core';
import {Album} from '../models';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  //---------------------------------------
  // Properties
  //---------------------------------------
  @Input() albums: Album[];
  
  //---------------------------------------
  // Inputs / Outputs
  //---------------------------------------
  // @Output() onNewAlbum = new EventEmitter<Album>();

  //---------------------------------------
  // Initialization
  //---------------------------------------
  constructor() { }

  ngOnInit() {
  }
  
  //---------------------------------------
  // Functions / Methods
  //---------------------------------------
}
