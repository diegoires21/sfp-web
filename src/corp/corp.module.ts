import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorpRoutingModule } from './corp-routing.module';
import { ManterPessoaComponent } from './manter-pessoa/manter-pessoa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material/material.module';
import { RestApiService } from './service/rest-api.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PopLoadComponent } from './pop-load/pop-load.component';
import { LoadService } from './service/load.service';
import { MessageService } from './service/message.service';
import { PopUpMsgConfirmComponent } from './pop-up-msg-confirm/pop-up-msg-confirm.component';
import { PopUpMsgComponent } from './pop-up-msg/pop-up-msg.component';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';


@NgModule({
  declarations: [ManterPessoaComponent,PopLoadComponent,PopUpMsgConfirmComponent,PopUpMsgComponent, ListarPessoaComponent],
  imports: [
    CommonModule,
    CorpRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  entryComponents:[PopLoadComponent,PopUpMsgConfirmComponent,PopUpMsgComponent],
  providers: [RestApiService,LoadService,MessageService,PopLoadComponent,PopUpMsgConfirmComponent,PopUpMsgComponent],
  exports:[PopLoadComponent,PopUpMsgConfirmComponent,PopUpMsgComponent]
})
export class CorpModule { }
