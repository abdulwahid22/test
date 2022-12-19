import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { EditAppoinmentComponent } from './edit-appoinment/edit-appoinment.component';


@NgModule({
  declarations: [
    CalendarComponent,
    CalendarViewComponent,
    AddAppointmentComponent,
    EditAppoinmentComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,

    FormsModule
  ]
})
export class CalendarModule { }
