import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-pop-load',
  templateUrl: './pop-load.component.html',
  styleUrls: ['./pop-load.component.css']
})
export class PopLoadComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public popUp: any) { 
        console.log(popUp);

    }

  
  ngOnInit() {
  }
  

}
