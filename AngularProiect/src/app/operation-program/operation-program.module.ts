import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationProgrameRoutingModule } from './operation-program-routing.module';
import { OperationProgramComponent } from './_operation-program/operation-program.component';




@NgModule({
  declarations: [OperationProgramComponent],
  imports: [
    CommonModule,
    OperationProgrameRoutingModule
  ]
})
export class OperationProgramModule { }
