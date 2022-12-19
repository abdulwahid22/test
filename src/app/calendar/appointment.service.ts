import { Injectable } from '@angular/core';
import { Init } from './calendar-data';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService extends Init {

  constructor() {
    super();
    console.log('Appointment Service Works');
    this.load();
   }

  getAppointments() {
   
    let appoinment = JSON.parse(localStorage.getItem('appointments') || '{}');
    return appoinment;
  }

  addAppointment(appoinment:any) {
     let appointments = JSON.parse(localStorage.getItem('appointments') || '{}');
     appointments.push(appoinment);
     localStorage.setItem('appointments', JSON.stringify(appointments));
  }

  deleteAppointment(id:any) {
    let appointments = JSON.parse(localStorage.getItem('appointments') || '{}');
    for(let i = 0; i <appointments.length; i++) {
     if(appointments[i].id == id) {
      appointments.splice(i, 1);
     }
  }
     localStorage.setItem('appointments', JSON.stringify(appointments));
  }

    updateAppointment(oldAppointment:any, newAppointment:any){  let appointments = JSON.parse(localStorage.getItem('appointments') || '{}');

    for(let i = 0; i <appointments.length; i++) {
     if(appointments[i].id == oldAppointment.id) {
      appointments[i] = newAppointment;
     }
  }
     localStorage.setItem('appointments', JSON.stringify(appointments));
}
}
