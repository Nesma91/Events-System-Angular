import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from './../../_models/student';
import { StudentService } from './../../student.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit, OnChanges, OnDestroy {
 stdId = 0

 student: Student =new Student(0, "", "", "");
 subscription: Subscription | null = null

  constructor(public stdSer: StudentService, public activateRoute: ActivatedRoute, public router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    // if(!changes['stdId'].isFirstChange()){
    //   this.stdSer.getStudentById(this.stdId).subscribe(data =>this.student = data)
    // }
  }

  save(){
     this.subscription = this.stdSer.updateStudent(this.student).subscribe(data =>{
      console.log(data);
      this.router.navigate(["/student"])
    });
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.stdSer.getStudentById(data["_id"]).subscribe(data =>this.student = data);
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

}
