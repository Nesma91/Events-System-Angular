import { Subscription } from 'rxjs';
import { StudentService } from './../../student.service';
import { Student } from './../../_models/student';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit, OnDestroy {

  newStd: Student = new Student(0, "", "", "");

  add(){
    this.stdSer.addNewStudent(this.newStd).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["/student"])
      }
    )
  }
  Subscription: Subscription | null = null

  constructor(public stdSer: StudentService, public router: Router) { }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.Subscription?.unsubscribe()
  }

}
