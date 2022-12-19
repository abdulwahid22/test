import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  emps:any;
  text:any;
  oldText:any
  title:any;
  appState = 'default';
  constructor(private service: AppointmentService,private router: Router) { }
  @ViewChild("f") form: any;
  ngOnInit(): void {
    this.emps = this.service.getAppointments();
  }
  onSubmit() {
    if (this.form.value) {
    let newEmployee = {
      id:uuid(),
      title: this.form.value.title,
      lastName: this.form.value.lastName,
      languages: this.form.value.languages,

    }
    this.emps.push(newEmployee);
    this.service.addAppointment(newEmployee);
    this.router.navigate(['calendar']);
    }
  }
}


