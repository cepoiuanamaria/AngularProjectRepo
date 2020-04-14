import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramContainerComponent } from '../shared/program-container/program-container.component';
import { DayHeaderComponent } from '../shared/day-header/day-header.component';
import { RoomHeaderComponent } from '../shared/room-header/room-header.component';
import { HourIntervalComponent } from '../shared/hour-interval/hour-interval.component';
import { OperationComponent } from '../shared/operation/operation.component';


@NgModule({
  declarations: [
    ProgramContainerComponent, 
    DayHeaderComponent, 
    RoomHeaderComponent, 
    HourIntervalComponent, 
    OperationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProgramContainerComponent, 
    DayHeaderComponent, 
    RoomHeaderComponent, 
    HourIntervalComponent, 
    OperationComponent
  ]

})
export class SharedModule { }
