import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-cadatro-vacinas',
  templateUrl: './cadatro-vacinas.component.html',
  styleUrls: ['./cadatro-vacinas.component.css']
})
export class CadatroVacinasComponent implements OnInit {

  form: FormGroup

  constructor(private fb:FormBuilder,
    private services:ServicesService,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.form = this.fb.group({
      nome:['',Validators.required],
      doses:['',Validators.required],
      indicacao:['',Validators.required]
    })
  }
  indicacao(){
    console.log("Deu certo!!!")
  }

  createVacina(){
    if(this.form.valid){
      var record = {}

      record['nome'] = this.form.get('nome').value  ;
      record['doses'] = this.form.get('doses').value;
      record['indicacao'] = this.form.get('indicacao').value;
      this.services.createVacinas(record)
  
      this.openSnackBar("Vacina Cadastrada com Sucesso", "X")
    }else{
      this.openSnackBar("Você precisa preencher todos os campos", "X")
    }
   
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
