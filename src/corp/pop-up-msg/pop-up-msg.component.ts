import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Message } from '../entidade/message';
import { PopUpDto } from '../entidade/pop-up-dto';
@Component({
  selector: 'app-pop-up-msg',
  templateUrl: './pop-up-msg.component.html',
  styleUrls: ['./pop-up-msg.component.css']
})
export class PopUpMsgComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<PopUpMsgComponent>,
    @Inject(MAT_DIALOG_DATA) public popUp: PopUpDto) {
    console.log(popUp);

  }

  ngOnInit() {
  }
  ok(): void {
    if (this.popUp.actionOk) {
      if (this.popUp.obj) {
        this.popUp.actionOk(this.popUp.obj);
      } else {
        this.popUp.actionOk();
      }
    }
    this.close();
  }
  cancelar(): void {
    if (this.popUp.actionCancel) {
      this.popUp.actionOk();
    }
    this.close();
  }
  close(): void {
    this.dialogRef.close();
  }
}
