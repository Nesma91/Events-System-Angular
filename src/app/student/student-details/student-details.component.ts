import { StudentService } from './../../student.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Student } from 'src/app/_models/student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student: Student | null = null

  constructor(public stdSer: StudentService, public activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(data => {

      this.stdSer.getStudentById(data["_id"]).subscribe(data => this.student = data)
    })
  }

}
