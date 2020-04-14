import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationProgramComponent } from './_operation-program/operation-program.component';

const routes: Routes = [
  {
    path: '',
    component: OperationProgramComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class OperationProgrameRoutingModule { }
  