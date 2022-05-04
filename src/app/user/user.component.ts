import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { DocumentSnapshot } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


import { Observable } from 'rxjs';
import { ServicesService } from '../services/services.service';
import { getMask } from '../utils/mask'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  docmentsSnapshot;
  docs = [];
  values;
  local = [];
  form: FormGroup

  constructor(private services:ServicesService,
    private fb:FormBuilder,
    private route:Router) { 
   
  }

  ngOnInit() {
    this.initForm()
    this.getAll()

  }

  initForm(){
    this.form = this.fb.group({
      cpf:[''],
    })
  }


  getAll(){
    var length;
    this.services.getEmployees().subscribe(res => {
      this.docmentsSnapshot = res.map(e =>{
        length = res.length
          this.docs.push(e.payload.doc.data()['cpf'])
      })
      console.log(this.docs)
    })
  }

  foundUser(){
    const valor =  this.form.get('cpf').value
    console.log(valor)
    if (this.docs.includes(valor)){
      localStorage.setItem('cpf', valor);
      this.route.navigate(['addVacina'])
    }else{
      console.log('não existe')
    }
  }

  navigate(){
    this.route.navigate(['vacinas'])
  }


}
