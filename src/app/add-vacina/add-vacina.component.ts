import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-vacina',
  templateUrl: './add-vacina.component.html',
  styleUrls: ['./add-vacina.component.css']
})
export class AddVacinaComponent implements OnInit {

  selectedValue: string;
  selectedCar: string;

  docmentsSnapshot;
  docs = [];
  form: FormGroup
  label = "Selecione a vacina"
  usuario;
  cpf;
  vacinas ;
  valorVacina;
  id ;

  constructor(private services:ServicesService,
    private fb:FormBuilder,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.getAllVacinas()
    this.initForm()
    this.cpf = localStorage.getItem('cpf')
    this.getUser()
  }

  initForm(){
    this.form = this.fb.group({
      vacina:[''],
      imunizado: [false]
    })
  }

  getAllVacinas(){
    var length;
    this.services.getVacinas().subscribe(res => {
      this.docmentsSnapshot = res.map(e =>{
        length = res.length
          this.docs.push(e.payload.doc.data())
      })
    })
  }
  
  value(value){
     this.valorVacina = value
     this.label = value.nome
  }

  call(){
    this.services.getAllCard(this.id).subscribe(res => 
      this.vacinas = res.payload.data()['vacinas']
      )
      if(this.vacinas){
        console.log(this.vacinas)
      }else{
        console.log("veio nada n  pai")
      }
  }


  cadastrar(){
    var record = {}
    record['doses'] = this.valorVacina.doses
    record['id'] = this.valorVacina.id.trim()
    record['imunizado'] = this.form.get('imunizado').value
    this.vacinas.push(record) 
    this.services.addCardVacinas(this.vacinas, this.id)
    this.openSnackBar("Vacina Cadastrada com Sucesso", "X")
    this.form.get('imunizado').setValue(false)
    this.form.get('vacina').setValue('')
    this.label = null
  }

  getUser(){
    var data = [];
    var length
    this.services.getEmployees().subscribe(res =>
        res.map(e => {
          data.push(e.payload.doc.data())
          length = data.length
          for(var i = 0; i < length ; i++){
          }
             if(data[i - 1]['cpf'] == this.cpf){
               this.usuario = data[i - 1]['nome']
               this.id = data[i - 1]['id'].trim()
               this.call()
            } 
        })
      )

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
