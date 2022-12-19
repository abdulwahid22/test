import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { CalendarComponent } from './calendar.component';
import { EditAppoinmentComponent } from './edit-appoinment/edit-appoinment.component';

const routes: Routes = [
  { path: '', component: CalendarViewComponent },
  { path: 'add', component: AddAppointmentComponent },
  { path: 'edit/:id', component: EditAppoinmentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
