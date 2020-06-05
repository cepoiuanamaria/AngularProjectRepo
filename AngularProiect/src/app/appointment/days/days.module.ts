import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '../shared/calendar/calendar.component';
import { MounthHeaderComponent } from '../shared/mounth-header/mounth-header.component';
import { WeekHeaderComponent } from '../shared/week-header/week-header.component';
import { WeekComponent } from '../shared/week/week.component';
import { DayComponent } from './day/day.component';



@NgModule({
  declarations: [CalendarComponent, MounthHeaderComponent, WeekHeaderComponent, WeekComponent, DayComponent],
  imports: [
    CommonModule
  ]
})
export class DaysModule { }
