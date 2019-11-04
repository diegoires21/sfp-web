import { Component, OnInit } from '@angular/core';
import { LoadService } from 'src/corp/service/load.service';
import { MatDialogRef, MatDialog } from '@angular/material';
import { PopLoadComponent } from 'src/corp/pop-load/pop-load.component';
import { Load } from 'src/corp/entidade/load';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  showLoad: boolean;
  dialogRef: MatDialogRef<any, any>;
  constructor(private loadService: LoadService,public dialog: MatDialog){

  }
  ngOnInit(): void {
    this.loadService.getObservadores().subscribe((data: Load) => setTimeout(() => {
      if (!this.showLoad && data.load) {
        if (this.dialogRef) {
          this.dialogRef.close();
        }
        this.dialogRef = this.dialog.open(PopLoadComponent, {
          width: '150px',
          height: '150px',
          data: {}
        });
      } else {
        this.showLoad = false;
        if (this.dialogRef) {
          this.dialogRef.close();
        }
      }
    }, 0));
  }
  title = 'sfp-web';
}
