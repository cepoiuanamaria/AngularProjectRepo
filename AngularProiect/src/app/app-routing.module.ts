import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{DoctorsComponent} from './doctors/doctors.component'
import{ServicesComponent} from './services/services.component'
import{PriceComponent} from './price/price.component'
import{AppointmentComponent} from './appointment/appointment.component'
import{LoginComponent} from './login/login.component'


const routes: Routes = [
  {
    component:DoctorsComponent,
    path:'doctor'
  },
  {
    component:ServicesComponent,
    path:'services'
  },
  {
    component:PriceComponent,
    path:'price'
  },
  {
    component:AppointmentComponent,
    path:'appoint'
  },
  {
    path: '_operation-program',
    loadChildren: () => import ('./operation-program/operation-program.module').then(module => module.OperationProgramModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
