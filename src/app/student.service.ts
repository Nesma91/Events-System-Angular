import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  //mutual URL base
  //baseUrl: string = "http://localhost:8080/students/"

  //get
  getAllStudents(){
    return this.http.get<Student[]>(this.baseURL);
  }

  //get by id
  getStudentById(_id: number){
    return this.http.get<Student>(this.baseURL+_id);
  }

  //post
  addNewStudent(std: Student){
    return this.http.post<Student>(this.baseURL, std);
  }

  //put
  updateStudent(std: Student){
    console.log(std)
    return this.http.put<Student>(this.baseURL+std._id, std);
  }

  //delete
  deleteStudent(_id: number){
    return this.http.delete<Student>(this.baseURL, {body: {_id}});
  }

  constructor(public http: HttpClient, @Inject("baseUrl") public baseURL: string) {
    this.baseURL += "students/"
   }
}
