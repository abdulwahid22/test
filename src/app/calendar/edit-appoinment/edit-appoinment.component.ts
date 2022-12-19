import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-edit-appoinment',
  templateUrl: './edit-appoinment.component.html',
  styleUrls: ['./edit-appoinment.component.css']
})
export class EditAppoinmentComponent implements OnInit {
  emp:any;
  id:any;
 
  constructor(private _Activatedroute:ActivatedRoute,private service: AppointmentService,private router:Router) { }
  @ViewChild("f") form: any;
  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.params['id'];
    let emps=this.service.getAppointments();
    this.emp=emps.find((p: { id: any; }) => p.id==this.id);
    console.log(this.emp);
  }
  onSubmit() {
    if (this.form.value) {
      console.log(this.form.value)
    this.service.updateAppointment(this.emp,this.form.value);
    this.router.navigate(['calendar']);
    }
  }
}
