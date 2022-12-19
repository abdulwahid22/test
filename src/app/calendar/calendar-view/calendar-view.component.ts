import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent implements OnInit {
  appointments:any;
  date:Date=new Date();
  monthName:any;
  yearName:any=new Date().getFullYear();
 
  constructor(private service: AppointmentService,private router:Router) { }

  ngOnInit(): void {
    this.appointments = this.service.getAppointments();
    this.monthName=new Date(monthNames[this.date.getMonth()]);
  }
  deleteAppointment(id:any) {
    if(confirm('Are you Sure'))
    for(let i = 0; i < this.appointments.length; i++) {
      if(this.appointments[i].id == id) {
          this.appointments.splice(i, 1);
      }
    }

    this.service.deleteAppointment(id);
  }
  add(id:any,date:any){
    this.date=date;
    const d = new Date(date);
    this.monthName=  monthNames[d.getMonth()]
    this.yearName=new Date(this.date).getFullYear();
  //this.router.navigateByUrl('/calendar/edit/'+id)
 
  }
 
}
