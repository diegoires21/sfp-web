import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Message } from '../entidade/message';
import { PopUpDto } from '../entidade/pop-up-dto';
@Component({
  selector: 'app-pop-up-msg-confirm',
  templateUrl: './pop-up-msg-confirm.component.html',
  styleUrls: ['./pop-up-msg-confirm.component.css']
})
export class PopUpMsgConfirmComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<PopUpMsgConfirmComponent>,
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
      this.popUp.actionCancel();
    }
    this.close();
  }
  close(): void {
    this.dialogRef.close();
  }
}
