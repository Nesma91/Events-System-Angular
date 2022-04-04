import { Student } from './../../_models/student';
import { StudentService } from './../../student.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy {

  constructor(public stdSer: StudentService) { }

  stdDetails: Student | null = null
  stdEditId = 0

  subscription: Subscription | null = null

  stds: Student[] = []

  deleteStd(_id: number){
    this.stdSer.deleteStudent(_id).subscribe(data => {console.log("Student Deleted")})
  }

  ngOnInit(): void {
    this.subscription = this.stdSer.getAllStudents().subscribe(data => this.stds = data)
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

}
