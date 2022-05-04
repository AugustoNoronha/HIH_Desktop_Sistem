import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVacinaComponent } from './add-vacina/add-vacina.component';
import { CadastroFuncionariosComponent } from './cadastro-funcionarios/cadastro-funcionarios.component';
import { CadatroVacinasComponent } from './cadatro-vacinas/cadatro-vacinas.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',component:UserComponent
  }, {
    path:'vacinas',component:CadatroVacinasComponent
  },
  {
    path:'funcionario',component:CadastroFuncionariosComponent
  },{
    path:'addVacina',component:AddVacinaComponent
  }
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
