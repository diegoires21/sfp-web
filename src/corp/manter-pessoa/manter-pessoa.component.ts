import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pessoa } from '../entidade/pessoa';
import { PaisService } from '../service/pais.service';
import { Pais } from '../entidade/pais';
import { EstadoService } from '../service/estado.service';
import { Estado } from '../entidade/estado';
import { Cidade } from '../entidade/cidade';
import { CidadeService } from '../service/cidade.service';
import { PessoaService } from '../service/pessoa.service';
import { LoadService } from '../service/load.service';
import { MessageType } from '../entidade/message';
import { PopUpDto, PopUpType } from '../entidade/pop-up-dto';
import { MatDialog } from '@angular/material';
import { PopUpMsgComponent } from '../pop-up-msg/pop-up-msg.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErro } from '../service/http-erro';

@Component({
  selector: 'app-manter-pessoa',
  templateUrl: './manter-pessoa.component.html',
  styleUrls: ['./manter-pessoa.component.scss']
})
export class ManterPessoaComponent implements OnInit {

  formPessoa: FormGroup;
  idPaisNatu: FormControl;
  idEstado: FormControl;
  paises: Pais[] = [];
  estados: Estado[] = [];
  cidades: Cidade[] = [];
  constructor(private paisService: PaisService,private estadoService: EstadoService,
              private cidadeService: CidadeService,private pessoaService: PessoaService,
              private loadService: LoadService,private dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router) { 
    this.idPaisNatu = new FormControl();
    this.idEstado = new FormControl();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.pessoaService.findById(id).then(e=> this.createForm(e));
      }
   });
    this.loadService.show();
    this.paisService.findAll().then(e=>{
        this.paises = e;
        
    }).catch(e=>{
      console.log(e);
    }).finally(()=>{
      this.loadService.hider();
    });
    
    this.createForm();
  }

  public changePais(idPais: number): void{
    this.estados =[];
    this.cidades = [];
    this.estadoService.findByPais(idPais).then(e=>{
      this.estados = e;
    }).catch(e=>{
      console.log(e);
    }).finally(()=>{
      this.loadService.hider();
    });
  }

  public changeEstado(idEstado: number): void{
    this.cidades =[];
    this.cidadeService.findByEstado(idEstado).then(e=>{
      this.cidades = e;
    }).catch(e=>{
      console.log(e);
    }).finally(()=>{
      this.loadService.hider();
    });;
  }

  private createForm(pessoa?: Pessoa): void{
    if(!pessoa){
        pessoa = new Pessoa();
    }else{
      this.idPaisNatu = new FormControl(pessoa.idPaisNaturalidade);
      this.idEstado = new FormControl(pessoa.idEstadoNaturalidade);
      this.changePais(pessoa.idPaisNaturalidade);
      this.changeEstado(pessoa.idEstadoNaturalidade);
    }
    let emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    this.formPessoa = new FormGroup({
      id: new FormControl(pessoa.id),
      nome: new FormControl(pessoa.nome),
      email: new FormControl(pessoa.email),
      idNaturalidade: new FormControl(pessoa.idNaturalidade),
      sexo: new FormControl(pessoa.sexo),
      nascimento: new FormControl(pessoa.nascimento),
      cpf: new FormControl(pessoa.cpf),
      nascionalidades: new FormControl(pessoa.nascionalidades)
    });
    this.formPessoa.get('email').setValidators(Validators.pattern(emailPattern)); 
  }
  sucessoOperacao(): void{
    const popUpConf = new PopUpDto();
    popUpConf.popUpType = PopUpType.INFO;
    popUpConf.msg = { type: MessageType.Info, message: 'Operação realizada com sucesso.' };
    const dialogRef = this.dialog.open(PopUpMsgComponent, {
        width: '300px',
        data: popUpConf
    });
  }
  erroOperacao(e: HttpErro): void{
    const popUpConf = new PopUpDto();
    popUpConf.popUpType = PopUpType.INFO;
    popUpConf.msg = { type: MessageType.Info, message: e.mensagem};
    const dialogRef = this.dialog.open(PopUpMsgComponent, {
        width: '300px',
        data: popUpConf
    });
  }
  onSubmit(): void{
    if(this.formPessoa.valid){
      let pessoa = this.formPessoa.value as Pessoa;
      let promisse = (pessoa.id)?this.pessoaService.update(pessoa):this.pessoaService.save(pessoa);
      promisse.then(e=>{
        this.sucessoOperacao();
      }).catch(e=>{
        this.erroOperacao(e);
      }).finally(()=>{
        this.loadService.hider();
      });;
    }
  }
  voltar(): void{
    this.router.navigate(['/corp/listar-pessoas']);
  }
}
